import styled from '@emotion/styled';

export const WrapperCrop = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const ItemPreviewWrapper = styled.div`
  flex: 1;
`;

export const ItemPreviewContent = styled.div`
  display: flex;
  gap: 16px;
`;

export const ItemPreviewThumb = styled.div`
  min-width: 160px;
`;

export const ItemToolsCrop = styled.div`
  flex: 0.2;
  background-color: #fff3;
  padding: 8px;
  border-radius: 4px;
  transform: translateY(-6px);
`;

export const PreviewTitleCrop = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const PreviewCrop = styled.div`
  position: absolute;
  inset: 79px auto auto 380px;
  width: 280px;
  background-color: #000;
`;

export const ToolsCrop = styled.div`
  display: flex;
  padding: 8px;
  justify-content: space-between;
`;
