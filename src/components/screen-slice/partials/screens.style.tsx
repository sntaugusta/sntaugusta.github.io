import styled from '@emotion/styled';

export const Screens = styled.div`
  display: flex;
  gap: 8px;
  flex: 1;
  align-items: center;
  padding-top: 72px;
`;

export const ScreensContent = styled.div`
  background-color: #000;
  position: relative;
  box-shadow: 0 8px 24px -8px #fff3;
  background-size: contain;
  background-repeat: no-repeat;
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
