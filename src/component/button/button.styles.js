import styled from 'styled-components';
const blue = '#73adf5';
const hoverBlue = '#2e78a6';

export const BaseButton = styled.button`
  height: 50px;
  width: 150px;
  text-align: center;
  padding: 10px;
  margin: 20px 10px;
  background-color: black;
  color: white;
  border: 1px solid black;
  font-family: 'Roboto Condensed';
  font-size: 16px;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
`;
export const GoogleButton = styled(BaseButton)`
  background-color: ${blue};
  border: none;
  &:hover {
    background-color: ${hoverBlue};
    color: white;
  }
`;
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }
`;

// .button-container {
//   height: 50px;
//   width: 150px;
//   text-align: center;
//   padding: 10px;
//   margin: 20px 10px;
//   background-color: $black;
//   color: white;
//   border: 1px solid black;
//   font-family: 'Roboto Condensed';
//   font-size: 16px;

//   &:hover {
//     background-color: white;
//     color: $black;
//     cursor: pointer;
//   }
//   &.google-button {
//     background-color: $blue;
//     border: none;
//     &:hover {
//       background-color: $hoverBlue;
//       color: white;
//     }
//   }
//   &.inverted-button {
//     background-color: white;
//     color: black;
//     &:hover {
//       cursor: pointer;
//       background-color: black;
//       color: white;
//     }
//   }
// }
