import { type Currency } from '../types/currency';

/**
 * Получить правильный символ валюты для отображения
 * @param currency - основная валюта
 * @param paymentCurrency - выбранная валюта внутри платежной системы (опционально)
 * @returns символ валюты для отображения
 */
export const getDisplayCurrencySymbol = (
  currency?: Currency
): string => {
  if (!currency) return '';
  
  return currency.symbol;
};

/**
 * Получить правильную валюту для форматирования чисел
 * @param currency - основная валюта
 * @param paymentCurrency - выбранная валюта внутри платежной системы (опционально)
 * @returns валюта для форматирования
 */
export const getDisplayCurrency = (
  currency?: Currency
): Currency | undefined => {
  if (!currency) return undefined;
  
  return currency;
};

/**
 * Получить правильный символ валюты для отображения в профиле
 * @param currency - валюта из API
 * @param paymentCurrencyName - название валюты внутри платежной системы (опционально)
 * @returns символ валюты для отображения
 */
export const getProfileCurrencySymbol = (currency: Currency): string => {
  if (!currency) return '';
  
  // Если это объект с полем symbol, используем его
  if (currency.symbol) {
    return currency.symbol;
  }
  
  // Если это строка, возвращаем как есть
  if (typeof currency === 'string') {
    return currency;
  }
  
  return '';
};

/**
 * Получить правильную валюту для форматирования в профиле
 * @param currency - валюта из API
 * @param paymentCurrencyName - название валюты внутри платежной системы (опционально)
 * @returns валюта для форматирования
 */
export const getProfileCurrency = (currency: Currency): Currency | undefined => {
  if (!currency) return undefined;
  
  // Если это объект с полями валюты, создаем Currency
  if (currency.symbol && currency.category) {
    return {
      id: currency.id || currency.symbol.toLowerCase(),
      symbol: currency.symbol,
      name: currency.name || currency.symbol,
      category: currency.category,
      icon: currency.icon
    } as Currency;
  }
  
  // Если это строка, создаем базовую валюту
  if (typeof currency === 'string') {
    return {
      id: currency,
      symbol: currency,
      name: currency,
      category: 'fiat', // По умолчанию считаем фиатной
      icon: currency
    } as Currency;
  }
  
  return undefined;
};
