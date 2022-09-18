import styled from 'styled-components';
import { ReactComponent as SpinnerLoader } from '../../assets/Rolling.svg';
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
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 60px;
    font-size: 12px;
    margin: 5px 5px;
    padding: 5px;
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

export const ButtonSpinner = styled(SpinnerLoader)`
  margin: 0px;
  width: 30px;
  height: 30px;
  background-color: transparent;
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
