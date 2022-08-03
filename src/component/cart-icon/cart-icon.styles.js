import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  height: 100%;
  position: relative;
  padding: 10px 15px;
`;
export const ShoppingBadge = styled(ShoppingIcon)`
  height: 100%;
  width: 27px;

  &:hover {
    cursor: pointer;
  }
`;
export const CartBadge = styled.span`
  position: absolute;
  font-size: 15px;
  top: 40px;
  right: 24px;
`;

// .cart-icon-container {
//   height: 100%;
//   position: relative;
//   padding: 10px 15px;

//   .shopping-icon {
//     height: 100%;
//     width: 27px;

//     &:hover {
//       cursor: pointer;
//     }
//   }

//   .cart-badge {
//     position: absolute;
//     font-size: 15px;
//     top: 40px;
//     right: 24px;
//   }
// }
