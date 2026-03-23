import { Aside } from '@/components/aside';
import { useStreamMessageContext } from '@/context/pages/content';
import { InputEvent } from 'react';
import * as S from './stream-message-aside.style';

export const StreamMessageAside = () => {
  const {
    set: { setStateButtonCopyDisabled, setStateTextCode },
  } = useStreamMessageContext();

  const handleInputMessage = (e: InputEvent<HTMLTextAreaElement>) => {
    const { currentTarget } = e;
    setStateButtonCopyDisabled(currentTarget.value.length === 0);
    setStateTextCode(
      `javascript:(t=>{let e=e=>t.querySelector(e),n=t=>e("#live-chat").contentDocument.querySelector(t),o=new InputEvent("input"),c=n("div#input");c.textContent="${encodeURIComponent(currentTarget.value)}",c.dispatchEvent(o),setTimeout(()=>{n("#send-button button").click()},100)})(document);`
    );
  };

  return (
    <Aside>
      <S.StreamAsideWrapper>
        <S.StreamAsideTitle>Mensagem</S.StreamAsideTitle>
        <S.StreamAsideMessageText placeholder="Digite sua mensage aqui..." onInput={handleInputMessage} />
      </S.StreamAsideWrapper>
    </Aside>
  );
};
