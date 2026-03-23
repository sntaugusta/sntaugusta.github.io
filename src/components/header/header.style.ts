import styled from '@emotion/styled';
import Link from 'next/link';

export const HeaderWrapper = styled.header`
  padding: 4px;
  display: flex;
  background-color: #111111;
  border-bottom: 1px solid #222222;
`;

export const HeaderName = styled.div`
  font-size: 16px;
  color: #ffffff;
  text-transform: uppercase;
`;

export const HeaderBrand = styled(Link)`
  display: flex;
  align-items: center;
  &:hover {
    ${HeaderName} {
      color: #cccccc;
    }
  }
`;

export const HeaderLogo = styled.span`
  padding: 4px;
  svg {
    width: 24px;
    height: 24px;
  }
  path {
    fill: #ffffff;
  }
`;

export const HeaderMenu = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  color: #96ad45;
  font-size: 12px;
  padding: 8px 16px;
  transition:
    background-color 0.3s,
    color 0.3s;
  &:hover {
    background-color: #96ad45;
    color: #ffffff;
  }
`;
