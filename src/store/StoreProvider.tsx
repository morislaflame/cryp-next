'use client'

import { createContext, useState, useEffect, useContext, type ReactNode } from "react";
import LoadingIndicator from "../components/ui/LoadingIndicator";
import UserStore from "@/store/UserStore";
import ChatStore from "@/store/ChatStore";
import ExchangeStore from "@/store/ExchangeStore";
import ExchangeRatesStore from "@/store/ExchangeRatesStore";

export interface IStoreContext {
  user: UserStore;
  chat: ChatStore;
  exchange: ExchangeStore;
  exchangeRates: ExchangeRatesStore;
}

// Создаем единственный экземпляр сторов
let storeInstance: IStoreContext | null = null;

export function getStore(): IStoreContext {
  if (!storeInstance) {
    throw new Error("Store not initialized");
  }
  return storeInstance;
}

export function useStore(): IStoreContext {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

export const Context = createContext<IStoreContext | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [stores, setStores] = useState<IStoreContext | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Проверяем, что мы на клиенте
    if (typeof window === 'undefined') return;
    
    // Если уже инициализированы, не делаем это снова
    if (isInitialized) return;

    const initializeStores = () => {
      try {
        // Создаем сторы только один раз
        if (!storeInstance) {
          storeInstance = {
            user: new UserStore(),
            chat: new ChatStore(),
            exchange: new ExchangeStore(),
            exchangeRates: new ExchangeRatesStore(),
          };
        }

        setStores(storeInstance);
        setIsInitialized(true);

        // Проверяем авторизацию после создания stores
        storeInstance.user.checkAuth();
      } catch (error) {
        console.error('Error initializing stores:', error);
      }
    };

    initializeStores();
  }, [isInitialized]);

  // Если мы на сервере, возвращаем children без StoreProvider
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  if (!stores) {
    return <LoadingIndicator />;
  }

  return <Context.Provider value={stores}>{children}</Context.Provider>;
};

export default StoreProvider;