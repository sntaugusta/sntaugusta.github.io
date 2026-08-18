'use client';

import { Container } from '@/components/container';
import { GlobalsStyle } from '@/components/global-css';
import { SplitScreenContextProvider } from '@/components/screen-slice/partials/screen-slice.context';
import { AsideContextProvider } from '@/context/aside.context';
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
        <SplitScreenContextProvider>
          <AsideContextProvider>
            <ToastrContextProvider>
              <Container>{children}</Container>
            </ToastrContextProvider>
          </AsideContextProvider>
        </SplitScreenContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
