import { LogoSara } from '@/components/icons';
import { Pathname } from '@/types/enums/pathname';
import * as S from './header.style';
import { Breadcrumb } from './partials/breadcrumb';

export const Header = () => {
  return (
    <>
      <S.HeaderWrapper>
        <S.HeaderBrand href={Pathname.Home}>
          <S.HeaderLogo>
            <LogoSara />
          </S.HeaderLogo>
          <S.HeaderName>Backstage HUB</S.HeaderName>
        </S.HeaderBrand>
        <S.HeaderMenu>
          <S.HeaderLink href={Pathname.Split}>Split</S.HeaderLink>
          <S.HeaderLink href={Pathname.Kids}>Kids</S.HeaderLink>
          <S.HeaderLink href={Pathname.StreamMessage}>Stream Message</S.HeaderLink>
        </S.HeaderMenu>
      </S.HeaderWrapper>
      <Breadcrumb />
    </>
  );
};
