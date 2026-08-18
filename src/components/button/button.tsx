import { FC, MouseEvent, PropsWithChildren } from 'react';
import * as S from './button.style';

export const Button: FC<PropsWithChildren<S.IButton>> = (props) => {
  const { icon, children, onClick } = props;

  const handleClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { ariaDisabled },
    } = e;
    if (ariaDisabled === 'true') {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <S.WrapperButton {...props} onClick={handleClickButton}>
      {icon ? <S.IconButton>{icon}</S.IconButton> : null}
      <S.TextButton>{children}</S.TextButton>
    </S.WrapperButton>
  );
};
