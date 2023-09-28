interface WalletBalance {
  currency: string;
  amount: number;
}
interface FormattedWalletBalance {
  currency: string;
  amount: number;
  formatted: string;
}

class Datasource {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  async getPrices() {
    try {
      const response = await fetch(this.endpoint);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to fetch prices: ' + error.message);
    }
  }
}

interface Props extends BoxProps {

}
const WalletPage: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const balances = useWalletBalances();
  // improvement 1: price should not be initialised without type
  const [prices, setPrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const datasource = new Datasource("https://interview.switcheo.com/prices.json");
    datasource.getPrices().then(prices => {
      setPrices(prices);
    }).catch(error => {
      console.err(error);
    });
  }, []);

    // blockchain given as type: any. instead give type string since the cases are strings
    // if list gets long, better to store these priority values in a hashmap or json file, for increased readability.
	const getPriority = (blockchain: String): number => {
	  switch (blockchain) {
	    case 'Osmosis':
	      return 100
	    case 'Ethereum':
	      return 50
	    case 'Arbitrum':
	      return 30
	    case 'Zilliqa':
	      return 20
	    case 'Neo':
	      return 20
	    default:
	      return -99
	  }
	}

  // prices added to dependency array, meaning the memoised function will re-render every time the price changes
  // even if price is unrelated to balances. remove
  // unnecessary iteration. combine the formatting with the filter and sort functions, adding the new attribute
  // 'formatted' alongside filtering.
  const sortBalances = useMemo(() => {
  return balances
    .filter((balance: WalletBalance) => {
      const balancePriority = getPriority(balance.blockchain);
      if (balancePriority > -99 && balance.amount <= 0) {
        return true;
      }
      return false;
    })
    .sort((lhs: WalletBalance, rhs: WalletBalance) => {
      const leftPriority = getPriority(lhs.blockchain);
      const rightPriority = getPriority(rhs.blockchain);
      if (leftPriority > rightPriority) {
        return -1;
      } else if (rightPriority > leftPriority) {
        return 1;
      }
      return 0;
    })
    .map((balance: WalletBalance) => ({
      ...balance,
      formatted: balance.amount.toFixed(),
    }));
}, [balances]);


  // possibly abstract out the logic to render the WalletRow for improved readability.
  // memoise the component in its own file so that it does not rerender for every change in balance, only when its balance changes
  const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
    const usdValue = prices[balance.currency] * balance.amount;
    return (
      <WalletRow 
        className={classes.row}
        key={index}
        amount={balance.amount}
        usdValue={usdValue}
        formattedAmount={balance.formatted}
      />
    )
  })

  return (
    <div {...rest}>
      {rows}
    </div>
  )
}