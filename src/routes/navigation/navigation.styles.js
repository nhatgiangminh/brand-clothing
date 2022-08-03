import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 1fr;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
export const NavLinksContainer = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
`;
// .navigation {
//   height: 70px;
//   width: 1fr;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 20px;

//   .nav-links-container {
//     height: 100%;
//     width: 30%;
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;

//     .nav-link {
//       padding: 10px 15px;
//       text-decoration: none;
//       font-size: 20px;
//     }
//   }
// }
