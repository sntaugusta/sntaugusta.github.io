import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animationAside = keyframes`
  from { opacity: 0; }
  to { opacity: 1 }
`;

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const ContainerContent = styled.main`
  width: 80vw;
  background-color: #222;
  overflow: auto;
  transition:
    width 0.6s,
    margin-left 0.6s;
  padding: 8px;
`;

export const ContainerAside = styled.div`
  width: 20vw;
  background-color: #111;
  overflow: auto;
  transition: width 0.6s;
  > * {
    opacity: 0;
    animation: ${animationAside} 0.6s 0.3s forwards;
  }
  &:empty {
    > * {
      transition: opacity 1s 0.6s;
    }
    width: 0vw;
    ~ main {
      width: 100vw;
    }
  }
`;
