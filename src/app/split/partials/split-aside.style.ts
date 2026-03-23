import styled from '@emotion/styled';

export const Category = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const CategoryName = styled.h3`
  border-right: 1px solid #fff3;
  margin-right: 24px;
  padding: 16px 24px 16px 0;
`;

export const CategoryLabel = styled.label`
  font-weight: 100;
  display: block;
  text-align: right;
`;

export const CategoryInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryLockWrapper = styled.div`
  position: relative;
  width: 32px;
`;

export const CategoryLockContent = styled.button`
  position: absolute;
  top: 12px;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background-color: #fff;
  fill: #666;
  &:hover {
    background-color: #666;
    fill: #fff;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    right: 12px;
    border-right: 1px solid #fff;
    height: 4px;
    width: 16px;
  }
  &:after {
    top: -12px;
    border-top: 1px solid #fff;
  }
  &:before {
    bottom: -12px;
    border-bottom: 1px solid #fff;
  }
  svg {
    width: 24px;
    height: 24px;
    pointer-events: none;
  }
`;

export const CategoryInput = styled.input`
  font-size: 20px;
  padding: 8px;
  width: 100px;
  margin-right: 4px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  color: #333;
`;

export const Tools = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 8px;
`;

export const ToolsIcon = styled.a`
  background-color: #fff3;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  position: relative;
  padding: 4px 16px;
  &:hover {
    background-color: #fff;
    color: #006;
  }
`;
