import { IconHome } from '@/components/icons';
import { Pathname } from '@/types/enums/pathname';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useEffectEvent, useState } from 'react';
import * as S from './breadcrumb.style';

export const Breadcrumb = () => {
  const pathname = usePathname();
  const [statePaths, setStatePaths] = useState<string[]>([]);

  const stateEvent = useEffectEvent((params: string[]) => {
    setStatePaths(params);
  });

  useEffect(() => {
    if (pathname === Pathname.Split) {
      stateEvent(['Projeção', 'Split']);
    }
    if (pathname === Pathname.Kids) {
      stateEvent(['Projeção', 'Kids']);
    }
    if (pathname === Pathname.StreamMessage) {
      stateEvent(['Live', 'Stream Message']);
    }
    if (pathname === Pathname.Home) {
      stateEvent([]);
    }
  }, [pathname]);

  return statePaths.length ? (
    <S.BreadcrumbRow>
      <S.BreadcrumbItem {...{ as: Link, href: Pathname.Home }}>
        <IconHome />
        <div>Home</div>
      </S.BreadcrumbItem>
      {statePaths.map((item, i) =>
        statePaths.length === i + 1 ? (
          <S.BreadcrumbItemLast key={i}>{item}</S.BreadcrumbItemLast>
        ) : (
          <S.BreadcrumbItem key={i}>{item}</S.BreadcrumbItem>
        )
      )}
    </S.BreadcrumbRow>
  ) : null;
};
