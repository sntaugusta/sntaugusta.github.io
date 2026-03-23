import { FC, PropsWithChildren } from 'react';
import * as S from './aside.style';

export const Aside: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <S.AsideWrapper>{children}</S.AsideWrapper>;
};
