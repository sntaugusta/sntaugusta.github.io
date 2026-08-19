import { Button } from '@/components/button';
import { Input } from '@/components/input';
import styled from '@emotion/styled';

export const ScreenToolsItem = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const ScreenToolsTitle = styled.div`
  padding-bottom: 8px;
`;

export const ScreenToolsContent = styled.div`
  display: flex;
  padding-bottom: 16px;
  gap: 16px;
`;

export const ScreenToolsField = styled(Input)`
  width: 80px;
`;

export const ScreenToolsButton = styled(Button)`
  justify-content: center;
`;
