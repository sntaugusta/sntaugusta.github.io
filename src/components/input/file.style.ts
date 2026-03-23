import styled from '@emotion/styled';

export const FilePreview = styled.span`
  width: 96%;
  height: 96%;
  pointer-events: none;
  position: absolute;
  left: 2%;
  top: 2%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  z-index: 2;
`;

export const Filename = styled.span`
  font-size: 24px;
  min-height: 1.25em;
`;

export const File = styled.label<{ hasImage: boolean }>`
  margin: 8px 0 24px;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
  position: relative;
  border: 3px dotted #fffe;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff3;
    border-radius: 12px;
    z-index: 3;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    cursor: pointer;
  }
  svg {
    width: 64px;
    height: 64px;
    opacity: ${({ hasImage }) => (hasImage ? 0 : 1)};
  }
  path {
    fill: #fff;
  }
  * {
    z-index: 2;
  }
  ${Filename} {
    opacity: ${({ hasImage }) => (hasImage ? 0 : 1)};
  }
`;
