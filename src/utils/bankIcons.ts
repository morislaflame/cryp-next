// Импорт иконок банков (только SVG)
import { StaticImageData } from 'next/image';
import sberIcon from '../assets/sber.svg';
import tinkoffIcon from '../assets/tinkoff.svg';
import vtbIcon from '../assets/vtb.svg';
import alfaIcon from '../assets/alfa.svg';
import raiffIcon from '../assets/raiffeisen.svg';
import gazpromIcon from '../assets/gazprom.svg';
import rosbankIcon from '../assets/ros.svg';
import mkbIcon from '../assets/mkb.svg';
import otkritieIcon from '../assets/open.svg';
import ozonIcon from '../assets/open.svg';
import psbIcon from '../assets/psb.svg';
import sinaraIcon from '../assets/skbbank.svg';
import sovkomIcon from '../assets/sovcombank.svg';

// Импорт иконок криптовалют (только PNG)
import btcIcon from '../assets/btc.png';
import ethIcon from '../assets/eth.png';
import usdtIcon from '../assets/usdt.png';
import bnbIcon from '../assets/bnb.png';
import adaIcon from '../assets/ada.png';
import solIcon from '../assets/sol.png';
import xrpIcon from '../assets/xrp.png';
import dotIcon from '../assets/dot.png';
import dogeIcon from '../assets/doge.png';
import avaxIcon from '../assets/avax.png';
import ltcIcon from '../assets/ltc.png';
import linkIcon from '../assets/link.png';
import bchIcon from '../assets/bch.png';
import xlmIcon from '../assets/xlm.png';
import xmrIcon from '../assets/xmr.png';
import tonIcon from '../assets/ton.png';
import trxIcon from '../assets/trx.png';
import usdcIcon from '../assets/usdc.png';
import usdeIcon from '../assets/usde.png';
import shibIcon from '../assets/shib.png';

// Типы для иконок
export type BankIcon = StaticImageData; // SVG иконки банков
export type CryptoIcon = StaticImageData; // PNG иконки криптовалют

// Экспорт иконок банков (только SVG)
export const bankIcons: Record<string, BankIcon> = {
  sberbank: sberIcon,
  tinkoff: tinkoffIcon,
  vtb: vtbIcon,
  alfabank: alfaIcon,
  raiffeisenbank: raiffIcon,
  gazprombank: gazpromIcon,
  rosbank: rosbankIcon,
  mkb: mkbIcon,
  otkritie: otkritieIcon,
  ozonbank: ozonIcon,
  psb: psbIcon,
  sinara: sinaraIcon,
  sovkombank: sovkomIcon,
};

// Экспорт иконок криптовалют (только PNG)
export const cryptoIcons: Record<string, CryptoIcon> = {
  btc: btcIcon,
  eth: ethIcon,
  usdt: usdtIcon,
  bnb: bnbIcon,
  ada: adaIcon,
  sol: solIcon,
  xrp: xrpIcon,
  dot: dotIcon,
  doge: dogeIcon,
  avax: avaxIcon,
  ltc: ltcIcon,
  link: linkIcon,
  bch: bchIcon,
  xlm: xlmIcon,
  xmr: xmrIcon,
  ton: tonIcon,
  trx: trxIcon,
  usdc: usdcIcon,
  usde: usdeIcon,
  shib: shibIcon,
};

// Универсальная функция для получения иконки банка (только SVG)
export const getBankIcon = (bankId: string): BankIcon | undefined => {
  return bankIcons[bankId];
};

// Универсальная функция для получения иконки криптовалюты (только PNG)
export const getCryptoIcon = (cryptoId: string): CryptoIcon | undefined => {
  return cryptoIcons[cryptoId];
};

