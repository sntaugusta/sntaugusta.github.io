'use client';

import { Container } from '@/components/container';
import { GlobalsStyle } from '@/components/global-css';
import { AsideContextProvider } from '@/context/aside.context';
import { PageContextProvider } from '@/context/pages';
import { ToastrContextProvider } from '@/context/toastr.context';
import { FC, PropsWithChildren } from 'react';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head>
        <title>Backstage HUB</title>
        <GlobalsStyle />
      </head>
      <body>
        <AsideContextProvider>
          <ToastrContextProvider>
            <PageContextProvider>
              <Container>{children}</Container>
            </PageContextProvider>
          </ToastrContextProvider>
        </AsideContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
