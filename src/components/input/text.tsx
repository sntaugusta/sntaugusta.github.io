import { IInput } from '@/types/components/input';
import { FC } from 'react';
import * as S from './text.style';

export const InputText: FC<IInput> = (props) => {
  const { id, label } = props;
  return (
    <S.WrapperInput>
      <S.ElementInput type="text" {...props} />
      <S.LabelInput htmlFor={id}>{label}</S.LabelInput>
    </S.WrapperInput>
  );
};
