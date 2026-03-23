'use client';

import { useAsideContext } from '@/context/aside.context';
import { useEffect } from 'react';
import * as S from './kids.style';
import { KidsAside } from './partials/kids-aside';

const KidsPage = () => {
  const {
    set: { setStateAside },
  } = useAsideContext();
  useEffect(() => {
    setStateAside(<KidsAside />);
  }, [setStateAside]);

  return (
    <S.KidsWrapper>Em breve uma área para desenvolver artes para apresentação de crianças na igreja</S.KidsWrapper>
  );
};

export default KidsPage;
