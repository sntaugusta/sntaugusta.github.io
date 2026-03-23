import styled from '@emotion/styled';

interface IScreen {
  ratio: number;
  width: string;
}

export const Wrapper = styled.div`
  color: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const Screens = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;
  padding-top: 72px;
`;

export const ScreenTitle = styled.div`
  position: absolute;
  left: 0%;
  bottom: 100%;
  padding: 0 0 24px 4px;
  transform: translateY(-16px);
  font-size: 20px;
`;

export const ScreenSize = styled.div`
  position: absolute;
  left: 0%;
  bottom: 100%;
  padding: 0 0 0 4px;
  transform: translateY(-16px);
  font-size: 12px;
  font-family: Arial;
`;

export const ScreensContent = styled.div<IScreen>`
  background-color: #000;
  position: relative;
  aspect-ratio: ${({ ratio }) => ratio};
  width: ${({ width }) => width};
  box-shadow: 0 8px 24px -8px #fff3;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const ScreenDownload = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 24px;
`;

export const ScreenDownloadButton = styled.a`
  display: flex;
  border-radius: 4px;
  font-size: 24px;
  background-color: #fff3;
  padding: 8px 32px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.6s;
  pointer-events: none;
  &[download$='.png'] {
    opacity: 1;
    cursor: pointer;
    pointer-events: all;
  }
  &:hover {
    background-color: #fff;
    color: #006;
  }
`;
