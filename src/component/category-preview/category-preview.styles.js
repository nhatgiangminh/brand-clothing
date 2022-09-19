import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PreviewCategory = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 40px;
  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    height: 30%;
  }
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: black;
  &:hover {
    color: grey;
    cursor: pointer;
  }
`;

export const ProductPreview = styled.div`
  margin-top: 20px;
  width: 100%;
  height: auto;
  display: flex;
`;
// .preview-container {
//   width: 100%;
//   height: auto;
//   margin-bottom: 20px;
//   .title-nav {
//     &:hover {
//       color: grey;
//       cursor: pointer;
//     }
//   }
//   .preview {
//     width: 100%;
//     height: 400px;
//     display: flex;
//   }
// }
