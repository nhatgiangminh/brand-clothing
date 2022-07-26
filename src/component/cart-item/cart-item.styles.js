import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px 20px 10px;
  img {
    width: 40%;
    height: 105px;
  }
  @media (max-width: 600px) {
    padding: 5px 10px 10px 5px;
    img {
      height: 100%;
      width: 45%;
    }
    font-size: 10px;
  }
`;
export const CartInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

// .cart-item {
//   display: flex;
//   justify-content: flex-start;
//   padding: 10px 20px 20px 10px;
//   img {
//     width: 40%;
//     height: 105px;
//   }
//   .cart-info {
//     margin-left: 15px;
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
//     justify-content: center;
//   }
// }
