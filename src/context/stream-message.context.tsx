'use client';

import { IStreamMessageContext } from '@/types/context/stream-message';
import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

const StreamMessageContext = createContext<IStreamMessageContext>({
  get: { stateButtonCopyDisabled: true, stateTextCode: '' },
  set: {
    setStateButtonCopyDisabled: () => null,
    setStateTextCode: () => null,
  },
});

export const StreamMessageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [stateButtonCopyDisabled, setStateButtonCopyDisabled] = useState(true);
  const [stateTextCode, setStateTextCode] = useState('');
  const values = {
    get: { stateButtonCopyDisabled, stateTextCode },
    set: { setStateButtonCopyDisabled, setStateTextCode },
  };
  return <StreamMessageContext.Provider value={values}>{children}</StreamMessageContext.Provider>;
};

export const useStreamMessageContext = () => useContext(StreamMessageContext);
