import React from 'react';
import { Image } from '@chakra-ui/react';

import blur from '../assets/tokens/BLUR.svg';
import bneo from '../assets/tokens/bNEO.svg';
import busd from '../assets/tokens/BUSD.svg';
import usd from '../assets/tokens/USD.svg';
import eth from '../assets/tokens/ETH.svg';
import gmx from '../assets/tokens/GMX.svg';
import stevmos from '../assets/tokens/stEVMOS.svg';
import luna from '../assets/tokens/LUNA.svg';
import ratom from '../assets/tokens/rATOM.svg';
import strd from '../assets/tokens/STRD.svg';
import evmos from '../assets/tokens/EVMOS.svg';
import ibcx from '../assets/tokens/IBCX.svg';
import iris from '../assets/tokens/IRIS.svg';
import ampluna from '../assets/tokens/ampLUNA.svg';
import kuji from '../assets/tokens/KUJI.svg';
import stosmo from '../assets/tokens/stOSMO.svg';
import usdc from '../assets/tokens/USDC.svg';
import axlusdc from '../assets/tokens/axlUSDC.svg';
import atom from '../assets/tokens/ATOM.svg';
import statom from '../assets/tokens/stATOM.svg';
import osmo from '../assets/tokens/OSMO.svg';
import rswth from '../assets/tokens/rSWTH.svg';
import stluna from '../assets/tokens/stLUNA.svg';
import lsi from '../assets/tokens/LSI.svg';
import okb from '../assets/tokens/OKB.svg';
import okt from '../assets/tokens/OKT.svg';
import swth from '../assets/tokens/SWTH.svg';
import usc from '../assets/tokens/USC.svg';
import wbtc from '../assets/tokens/WBTC.svg';
import wsteth from '../assets/tokens/wstETH.svg';
import yieldusd from '../assets/tokens/YieldUSD.svg';
import zil from '../assets/tokens/ZIL.svg';

export const CRYPTOCURRENCIES = [
  { id: 'blur', name: 'BLUR' },
  { id: 'bneo', name: 'bNEO' },
  { id: 'busd', name: 'BUSD' },
  { id: 'usd', name: 'USD' },
  { id: 'eth', name: 'ETH' },
  { id: 'gmx', name: 'GMX' },
  { id: 'stevmos', name: 'STEVMOS' },
  { id: 'luna', name: 'LUNA' },
  { id: 'ratom', name: 'RATOM' },
  { id: 'strd', name: 'STRD' },
  { id: 'evmos', name: 'EVMOS' },
  { id: 'ibcx', name: 'IBCX' },
  { id: 'iris', name: 'IRIS' },
  { id: 'ampluna', name: 'ampLUNA' },
  { id: 'kuji', name: 'KUJI' },
  { id: 'stosmo', name: 'STOSMO' },
  { id: 'usdc', name: 'USDC' },
  { id: 'axlusdc', name: 'axlUSDC' },
  { id: 'atom', name: 'ATOM' },
  { id: 'statom', name: 'STATOM' },
  { id: 'osmo', name: 'OSMO' },
  { id: 'rswth', name: 'rSWTH' },
  { id: 'stluna', name: 'STLUNA' },
  { id: 'lsi', name: 'LSI' },
  { id: 'okb', name: 'OKB' },
  { id: 'okt', name: 'OKT' },
  { id: 'swth', name: 'SWTH' },
  { id: 'usc', name: 'USC' },
  { id: 'wbtc', name: 'WBTC' },
  { id: 'wsteth', name: 'wstETH' },
  { id: 'yieldusd', name: 'YieldUSD' },
  { id: 'zil', name: 'ZIL' },
];

export const getCryptoImage = cryptoName => {
  const lowercaseName = cryptoName.toLowerCase();

  switch (lowercaseName) {
    case 'blur':
      return <Image src={blur} height={'30px'} />;
    case 'bneo':
      return <Image src={bneo} height={'30px'} />;
    case 'busd':
      return <Image src={busd} height={'30px'} />;
    case 'usd':
      return <Image src={usd} height={'30px'} />;
    case 'eth':
      return <Image src={eth} height={'30px'} />;
    case 'gmx':
      return <Image src={gmx} height={'30px'} />;
    case 'stevmos':
      return <Image src={stevmos} height={'30px'} />;
    case 'luna':
      return <Image src={luna} height={'30px'} />;
    case 'ratom':
      return <Image src={ratom} height={'30px'} />;
    case 'strd':
      return <Image src={strd} height={'30px'} />;
    case 'evmos':
      return <Image src={evmos} height={'30px'} />;
    case 'ibcx':
      return <Image src={ibcx} height={'30px'} />;
    case 'iris':
      return <Image src={iris} height={'30px'} />;
    case 'ampluna':
      return <Image src={ampluna} height={'30px'} />;
    case 'kuji':
      return <Image src={kuji} height={'30px'} />;
    case 'stosmo':
      return <Image src={stosmo} height={'30px'} />;
    case 'usdc':
      return <Image src={usdc} height={'30px'} />;
    case 'axlusdc':
      return <Image src={axlusdc} height={'30px'} />;
    case 'atom':
      return <Image src={atom} height={'30px'} />;
    case 'statom':
      return <Image src={statom} height={'30px'} />;
    case 'osmo':
      return <Image src={osmo} height={'30px'} />;
    case 'rswth':
      return <Image src={rswth} height={'30px'} />;
    case 'stluna':
      return <Image src={stluna} height={'30px'} />;
    case 'lsi':
      return <Image src={lsi} height={'30px'} />;
    case 'okb':
      return <Image src={okb} height={'30px'} />;
    case 'okt':
      return <Image src={okt} height={'30px'} />;
    case 'swth':
      return <Image src={swth} height={'30px'} />;
    case 'usc':
      return <Image src={usc} height={'30px'} />;
    case 'wbtc':
      return <Image src={wbtc} height={'30px'} />;
    case 'wsteth':
      return <Image src={wsteth} height={'30px'} />;
    case 'yieldusd':
      return <Image src={yieldusd} height={'30px'} />;
    case 'zil':
      return <Image src={zil} height={'30px'} />;
    default:
      return <Image src={usd} height={'30px'} />;
  }
};
