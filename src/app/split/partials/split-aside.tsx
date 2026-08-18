'use client';

import { Aside } from '@/components/aside';
import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { ChangeEvent, FC } from 'react';
import * as S from './split-aside.style';

export const SplitAside: FC<{ onChange: (e: ChangeEvent<HTMLInputElement>) => void }> = (props) => {
  const { onChange } = props;
  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    onChange(e);
  };

  return (
    <Aside>
      <S.Tools>
        <Button as="a" href="/sample-psd.psd">
          PSD de Exemplo
        </Button>
      </S.Tools>
      <Input label="Upload de imagem" type="file" onChange={handleChangeFile} />
    </Aside>
  );
};
