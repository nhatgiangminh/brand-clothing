import styled from 'styled-components';

export const CartDropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border: 1px solid black;
  background-color: white;
  padding: 10px;
  align-items: center;
  height: 325px;
  width: 16%;
  z-index: 3;
  left: 78%;
  top: 90px;
`;

export const CartItemContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    visibility: hidden;
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgb(199, 199, 199);
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
  }
`;

// .cart-dropdown-container {
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   border: 1px solid black;
//   background-color: white;
//   padding: 10px;
//   align-items: center;
//   height: 325px;
//   width: 16%;
//   z-index: 3;
//   left: 78%;
//   top: 90px;
//   // &::-webkit-scrollbar {
//   //   display: none;
//   // }
//   .cart-items-container {
//     height: auto;
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     overflow-y: scroll;

//     &::-webkit-scrollbar{
//       visibility: hidden;
//       width: 5px;
//     }
//     &::-webkit-scrollbar-track{
//       background-color: rgb(199, 199, 199);
//     }
//     &::-webkit-scrollbar-thumb {
//       background-color: grey;
//     }
//   }
// }
