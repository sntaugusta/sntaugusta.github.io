import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

const ToastrContext = createContext<IToastrContext>({
  append: () => null,
  clear: () => null,
});

interface IToastrContext {
  append: (props: IToastr) => void;
  clear: () => void;
}

interface IToastr {
  text: string;
  timeout?: number;
  type?: 'success' | 'warning' | 'error';
  id?: string;
}

import styled from '@emotion/styled';

const WrapperToastr = styled.div`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

const ItemToastr = styled.div`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 12px;
  &[data-type='success'] {
    background-color: #96ad45;
    color: #fff;
  }
`;

export const ToastrContextProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [stateMessage, setStateMessage] = useState<IToastr[]>([]);

  const append = useCallback((props: IToastr) => {
    const { timeout = 5000 } = props;
    const id = crypto.randomUUID();
    setStateMessage((prevState) => {
      return [...prevState, { ...props, id }];
    });
    if (timeout) {
      setTimeout(() => {
        setStateMessage((prevState) => {
          return prevState.filter((item) => item.id !== id);
        });
      }, timeout);
    }
  }, []);

  const clear = useCallback(() => {}, []);

  const values = { append, clear };

  return (
    <ToastrContext.Provider value={values}>
      {children}
      <WrapperToastr>
        {stateMessage.map((item) => {
          return (
            <ItemToastr key={item.id} data-type={item.type || 'success'}>
              {item.text}
            </ItemToastr>
          );
        })}
      </WrapperToastr>
    </ToastrContext.Provider>
  );
};

export const useToastrContext = () => useContext(ToastrContext);
