'use client';

import { Button } from '@/components/button';
import { IconContentCopy } from '@/components/icons';
import { useAsideContext } from '@/context/aside.context';
import { useStreamMessageContext } from '@/context/pages/content';
import { useToastrContext } from '@/context/toastr.context';
import { useEffect } from 'react';
import { StreamMessageAside } from './partials/stream-message-aside';
import * as S from './steram-message.style';

const StreamMessagePage = () => {
  const {
    set: { setStateAside },
  } = useAsideContext();
  const {
    get: { stateButtonCopyDisabled, stateTextCode },
  } = useStreamMessageContext();
  const { append } = useToastrContext();

  const handleClickCopy = () => {
    navigator.clipboard.writeText(stateTextCode).then((e) => {
      append({ text: 'Código copiado' });
    });
  };

  useEffect(() => {
    setStateAside(<StreamMessageAside />);
  }, [setStateAside]);

  return (
    <S.StreamWrapper>
      <S.StreamTitle>Escreva a mensagem que você quer enviar na live no campo "Mensagem"</S.StreamTitle>
      <S.StreamMessageText>{stateTextCode}</S.StreamMessageText>
      <S.StreamButtons>
        <Button disabled={stateButtonCopyDisabled} icon={<IconContentCopy />} onClick={handleClickCopy}>
          Copiar
        </Button>
      </S.StreamButtons>
    </S.StreamWrapper>
  );
};

export default StreamMessagePage;
