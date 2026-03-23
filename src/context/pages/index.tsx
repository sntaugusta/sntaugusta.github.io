'use client';

import { IPageContext } from '@/types/context/page';
import { usePathname } from 'next/navigation';
import { createContext, FC, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';
import { SplitContextProvider } from './content/split.context';
import { StreamMessageProvider } from './content/stream-message.context';

const PageContext = createContext<IPageContext>({
  get: { statePage: <></> },
  set: { setStatePage: () => null },
});

export const PageContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [statePage, setStatePage] = useState<ReactNode>();
  const [stateConfigs, setStateConfigs] = useState<ReactNode>();
  const values = {
    get: { statePage, stateConfigs },
    set: { setStatePage, setStateConfigs },
  };

  useEffect(
    () => () => {
      setStatePage(undefined);
      setStateConfigs(undefined);
    },
    [pathname]
  );

  return (
    <PageContext.Provider value={values}>
      <SplitContextProvider>
        <StreamMessageProvider>{children}</StreamMessageProvider>
      </SplitContextProvider>
    </PageContext.Provider>
  );
};

export const usePageContext = () => useContext(PageContext);
