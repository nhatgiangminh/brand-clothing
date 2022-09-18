import styled from 'styled-components';
import { ReactComponent as Remove } from '../../assets/xmark-solid.svg';

export const RemoveSVG = styled(Remove)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CheckoutItemRow = styled.tr`
  margin: 20px 0px;
  height: 220px;
  img {
    width: 36%;
    height: 200px;
  }
  td {
    text-align: center;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin: 0 10px 0 10px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    img {
      height: 150px;
      width: 60%;
    }
  }
`;

// .checkout-item-row {
//   margin: 20px 0px;
//   height: 220px;
//   img {
//     width: 36%;
//     height: 200px;
//   }
//   td {
//     text-align: center;
//   }
//   .icon-svg {
//     width: 20px;
//     height: 20px;
//     cursor: pointer;
//   }
//   span {
//     font-size: 20px;
//     font-weight: bold;
//     margin: 0 10px 0 10px;
//     cursor: pointer;
//   }
// }
