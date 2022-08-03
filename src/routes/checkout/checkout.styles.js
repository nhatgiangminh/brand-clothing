import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
`;

export const CheckoutTable = styled.table`
  width: 100%;
  td {
    border-collapse: collapse;
    border-bottom: 1px solid #ddd;
  }
`;
export const TotalText = styled.span`
  display: flex;
  font-size: 30px;
  justify-content: flex-end;
`;
//
