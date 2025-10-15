import { bankIcons, cryptoIcons, BankIcon, CryptoIcon } from '../utils/bankIcons';

export interface BankOption {
  id: string;
  name: string;
  icon?: BankIcon | string; // SVG иконка банка или строка для наличных
}

export interface NetworkOption {
  id: string;
  name: string;
  icon?: string;
}

export interface Currency {
  id: string;
  name: string;
  symbol: string;
  category: 'fiat' | 'crypto';
  icon?: CryptoIcon | string; // Для криптовалют - PNG иконка, для фиата - строка
  banks?: BankOption[]; // Доступные банки для фиатных валют
  networks?: NetworkOption[]; // Доступные сети для криптовалют
}

export const mockCurrencies: Currency[] = [
  // Фиатные валюты
  { id: 'usd', name: 'Доллар США (Наличные)', symbol: 'USD', category: 'fiat', icon: 'USD' },
  { id: 'eur', name: 'Евро (Наличные)', symbol: 'EUR', category: 'fiat', icon: 'EUR' },
  { 
    id: 'rub', 
    name: 'Российский рубль', 
    symbol: 'RUB', 
    category: 'fiat', 
    icon: 'RUB',
    banks: [
      { id: 'cash', name: 'Наличные', icon: 'RUB' },
      { id: 'sberbank', name: 'Сбербанк', icon: bankIcons.sberbank },
      { id: 'tinkoff', name: 'Т-Банк (Тинькофф)', icon: bankIcons.tinkoff },
      { id: 'vtb', name: 'ВТБ', icon: bankIcons.vtb },
      { id: 'alfabank', name: 'Альфа-Банк', icon: bankIcons.alfabank },
      { id: 'raiffeisenbank', name: 'Райффайзенбанк', icon: bankIcons.raiffeisenbank },
      { id: 'gazprombank', name: 'Газпромбанк', icon: bankIcons.gazprombank },
      { id: 'rosbank', name: 'Росбанк', icon: bankIcons.rosbank },
      { id: 'otkritie', name: 'Открытие', icon: bankIcons.otkritie },
      { id: 'psb', name: 'ПСБ', icon: bankIcons.psb },
      { id: 'sovkombank', name: 'Совкомбанк', icon: bankIcons.sovkombank },
      { id: 'mkb', name: 'МКБ', icon: bankIcons.mkb },
      { id: 'ozonbank', name: 'Озон Банк', icon: bankIcons.ozonbank },
      { id: 'sinara', name: 'Синара', icon: bankIcons.sinara },
    ]
  },
  
  // Криптовалюты  
  { 
    id: 'btc', 
    name: 'Bitcoin', 
    symbol: 'BTC', 
    category: 'crypto', 
    icon: cryptoIcons.btc,
    networks: [
      { id: 'bitcoin', name: 'Bitcoin', icon: 'BTC' },
      { id: 'lightning', name: 'Lightning Network', icon: 'LN' },
    ]
  },
  { 
    id: 'bch', 
    name: 'Bitcoin Cash', 
    symbol: 'BCH', 
    category: 'crypto', 
    icon: cryptoIcons.bch,
    networks: [
      { id: 'bch', name: 'Bitcoin Cash', icon: 'BCH' },
    ]
  },
  { 
    id: 'eth', 
    name: 'Ethereum', 
    symbol: 'ETH', 
    category: 'crypto', 
    icon: cryptoIcons.eth,
    networks: [
      { id: 'erc20', name: 'ERC20', icon: 'ETH' },
      { id: 'arbitrum', name: 'Arbitrum', icon: 'ARB' },
      { id: 'optimism', name: 'Optimism', icon: 'OPT' },
    ]
  },
  { 
    id: 'usdt', 
    name: 'Tether', 
    symbol: 'USDT', 
    category: 'crypto', 
    icon: cryptoIcons.usdt,
    networks: [
      { id: 'trc20', name: 'TRC20', icon: 'T' },
      { id: 'erc20', name: 'ERC20', icon: 'E' },
      { id: 'bep20', name: 'BEP20', icon: 'B' },
      { id: 'polygon', name: 'Polygon', icon: 'P' },
    ]
  },
  { 
    id: 'bnb', 
    name: 'Binance Coin', 
    symbol: 'BNB', 
    category: 'crypto', 
    icon: cryptoIcons.bnb,
    networks: [
      { id: 'bep20', name: 'BEP20 (BSC)', icon: 'B' },
      { id: 'bep2', name: 'BEP2 (Binance Chain)', icon: 'B' },
    ]
  },
  { 
    id: 'ada', 
    name: 'Cardano', 
    symbol: 'ADA', 
    category: 'crypto', 
    icon: cryptoIcons.ada,
    networks: [
      { id: 'cardano', name: 'Cardano', icon: '◈' },
    ]
  },
  { 
    id: 'sol', 
    name: 'Solana', 
    symbol: 'SOL', 
    category: 'crypto', 
    icon: cryptoIcons.sol,
    networks: [
      { id: 'solana', name: 'Solana', icon: '◎' },
    ]
  },
  { 
    id: 'xrp', 
    name: 'Ripple', 
    symbol: 'XRP', 
    category: 'crypto', 
    icon: cryptoIcons.xrp,
    networks: [
      { id: 'ripple', name: 'Ripple', icon: '◉' },
    ]
  },
  { 
    id: 'dot', 
    name: 'Polkadot', 
    symbol: 'DOT', 
    category: 'crypto', 
    icon: cryptoIcons.dot,
    networks: [
      { id: 'polkadot', name: 'Polkadot', icon: '●' },
    ]
  },
  { 
    id: 'link', 
    name: 'Chainlink', 
    symbol: 'LINK', 
    category: 'crypto', 
    icon: cryptoIcons.link,
    networks: [
      { id: 'erc20', name: 'ERC20', icon: 'E' },
      { id: 'bep20', name: 'BEP20', icon: 'B' },
    ]
  },
  { 
    id: 'avax', 
    name: 'Avalanche', 
    symbol: 'AVAX', 
    category: 'crypto', 
    icon: cryptoIcons.avax,
    networks: [
      { id: 'avalanche-c', name: 'Avalanche C-Chain', icon: 'A' },
      { id: 'avalanche-x', name: 'Avalanche X-Chain', icon: 'A' },
    ]
  },
  { 
    id: 'ltc', 
    name: 'Litecoin', 
    symbol: 'LTC', 
    category: 'crypto', 
    icon: cryptoIcons.ltc,
    networks: [
      { id: 'litecoin', name: 'Litecoin', icon: 'Ł' },
    ]
  },
  { 
    id: 'doge', 
    name: 'Dogecoin', 
    symbol: 'DOGE', 
    category: 'crypto', 
    icon: cryptoIcons.doge,
    networks: [
      { id: 'dogecoin', name: 'Dogecoin', icon: 'D' },
    ]
  },
  { 
    id: 'xlm', 
    name: 'Stellar', 
    symbol: 'XLM', 
    category: 'crypto', 
    icon: cryptoIcons.xlm,
    networks: [
      { id: 'stellar', name: 'Stellar', icon: 'Ş' },
    ]
  },
  { 
    id: 'xmr', 
    name: 'Monero', 
    symbol: 'XMR', 
    category: 'crypto', 
    icon: cryptoIcons.xmr,
    networks: [
      { id: 'monero', name: 'Monero', icon: 'M' },
    ]
  },
  { 
    id: 'ton', 
    name: 'TON', 
    symbol: 'TON', 
    category: 'crypto', 
    icon: cryptoIcons.ton,
    networks: [
      { id: 'ton', name: 'TON', icon: 'T' },
    ]
  },
  
  
];

export const categoryLabels = {
  fiat: 'Фиат',
  crypto: 'Крипто',
};
