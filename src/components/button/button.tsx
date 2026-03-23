import { FC, PropsWithChildren } from 'react';
import * as S from './button.style';

export const Button: FC<PropsWithChildren<S.IButton>> = (props) => {
  const { icon, children } = props;
  return (
    <S.WrapperButton {...props}>
      {icon ? <S.IconButton>{icon}</S.IconButton> : null}
      <S.TextButton>{children}</S.TextButton>
    </S.WrapperButton>
  );
};
