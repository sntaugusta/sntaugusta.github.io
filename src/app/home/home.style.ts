import styled from '@emotion/styled';
import Link from 'next/link';

export const ProductList = styled.ul`
  display: flex;
  width: 100%;
  gap: 24px;
  padding: 24px;
`;

export const ProductItem = styled.li`
  flex: 0.2;
`;

export const ProductLink = styled(Link)`
  border: 1px solid #444;
  padding: 16px;
  gap: 16px;
  border-radius: 4px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  svg {
    width: 80px;
    height: 80px;
    * {
      fill: #fff;
    }
  }
  &:hover {
    background-color: #555;
    color: #96ad45;
    svg {
      * {
        fill: #96ad45;
      }
    }
  }
`;
