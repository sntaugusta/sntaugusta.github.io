'use client';

import { Header } from '@/components/header';
import { useAsideContext } from '@/context/aside.context';
import { FC, PropsWithChildren } from 'react';
import * as S from './container.style';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  const {
    get: { stateAside },
  } = useAsideContext();
  return (
    <S.Wrapper>
      <Header />
      <S.Content>
        <S.ContainerAside>{stateAside}</S.ContainerAside>
        <S.ContainerContent>{children}</S.ContainerContent>
      </S.Content>
    </S.Wrapper>
  );
};
