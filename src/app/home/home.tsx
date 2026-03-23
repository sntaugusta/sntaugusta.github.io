import { IconChat, IconChildCare, IconViewColumn } from '@/components/icons';
import { Pathname } from '@/types/enums/pathname';
import * as S from './home.style';

const items = [
  { name: 'Split', href: Pathname.Split, icon: <IconViewColumn /> },
  { name: 'Stream Message', href: Pathname.StreamMessage, icon: <IconChat /> },
  { name: 'Kids', href: Pathname.Kids, icon: <IconChildCare /> },
];

const PageHome = () => (
  <S.ProductList>
    {items.map(({ href, icon, name }) => (
      <S.ProductItem key={name}>
        <S.ProductLink href={href}>
          {icon}
          {name}
        </S.ProductLink>
      </S.ProductItem>
    ))}
  </S.ProductList>
);

export default PageHome;
