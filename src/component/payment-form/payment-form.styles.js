import styled from 'styled-components';

export const PaymentFormContainer = styled.div`
  height: 200px;
  width: 500px;
  margin: 15px 0px;
  @media (max-width: 600px) {
    width: 70%;
    height: 100px;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`;
