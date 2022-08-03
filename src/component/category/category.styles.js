import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
`;

export const CategoryTitle = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

// .product-category-container {
//   display: grid;
//   grid-template-columns: repeat(4,1fr);
//   column-gap: 10px;
//   row-gap: 20px;
// }
// .category-title {
//   display: flex;
//   justify-content: center;
//   margin-bottom: 30px;
// }
