import { IInput } from '@/types/components/input';
import { FC } from 'react';
import * as S from './text.style';

export const TextInput: FC<IInput> = (props) => {
  const { id, label, after, before } = props;
  return (
    <S.WrapperInput>
      <S.WrapperFieldInput>
        {before}
        <S.FieldInput type="text" {...props} />
        {after}
      </S.WrapperFieldInput>
      <S.LabelInput htmlFor={id}>{label}</S.LabelInput>
    </S.WrapperInput>
  );
};
