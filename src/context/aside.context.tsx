'use client';

import { IAsideContext } from '@/types/context/aside';
import { usePathname } from 'next/navigation';
import { createContext, FC, PropsWithChildren, ReactNode, useContext, useEffect, useState } from 'react';

const AsideContext = createContext<IAsideContext>({
  get: { stateAside: <></> },
  set: { setStateAside: () => null },
});

export const AsideContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [stateAside, setStateAside] = useState<ReactNode>();
  const [stateConfigs, setStateConfigs] = useState<ReactNode>();
  const values = {
    get: { stateAside, stateConfigs },
    set: { setStateAside, setStateConfigs },
  };

  useEffect(
    () => () => {
      setStateAside(undefined);
      setStateConfigs(undefined);
    },
    [pathname]
  );

  return <AsideContext.Provider value={values}>{children}</AsideContext.Provider>;
};

export const useAsideContext = () => useContext(AsideContext);
