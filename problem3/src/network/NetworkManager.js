const PRICES_URL = 'https://interview.switcheo.com/prices.json';

// Cache object to store responses
const cache = {};

// Function to fetch data with caching
async function fetchDataWithCache(url, cacheKey, cacheDurationMs = 6000) {
  // Check if the data is already in the cache and not expired
  const cachedData = cache[cacheKey];
  if (cachedData && Date.now() - cachedData.timestamp < cacheDurationMs) {
    return cachedData.data;
  }

  // If not in cache or expired, fetch the data and store it in the cache
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.status}`);
  }

  const data = await response.json();
  cache[cacheKey] = {
    data,
    timestamp: Date.now(),
  };

  return data;
}

const cacheKey = 'apiData';

async function fetchPrices() {
  try {
    const data = await fetchDataWithCache(PRICES_URL, cacheKey);

    // Create an object with currency as key and value as price
    const currencyData = {};
    data.forEach(item => {
      currencyData[item.currency] = item.price;
    });

    // console.log('Currency Data:', currencyData);
    return currencyData;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export default fetchPrices;
