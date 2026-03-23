import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const animateHeight = keyframes`
  from { height: 0px;padding: 0px; }
  to { height: 34px;padding: 8px 12px; }
`;

export const BreadcrumbRow = styled.ul`
  padding: 0px;
  background-color: #111111;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid #222222;
  overflow: hidden;
  height: 0px;
  animation: ${animateHeight} 0.3s 0.3s forwards;
  svg {
    width: 16px;
    height: 16px;
    fill: #96ad4566;
    margin-right: 8px;
    transform: translateY(-1px);
  }
`;

export const BreadcrumbHome = styled.li`
  padding: 8px 12px;
  background-color: #111111;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  border-bottom: 1px solid #222222;
  svg {
    width: 16px;
    height: 16px;
    fill: #96ad4566;
    margin-right: 8px;
    transform: translateY(-1px);
  }
`;

export const BreadcrumbItem = styled.li`
  color: #96ad4566;
  display: flex;
  align-items: center;
  font-size: 10px;
  &:after {
    content: '/';
    padding: 0 12px;
    transform: translateY(1px);
  }
`;

export const BreadcrumbItemLast = styled.li`
  color: #96ad45;
  font-size: 14px;
  transform: translateY(1px);
`;
