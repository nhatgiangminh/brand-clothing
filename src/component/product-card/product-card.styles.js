import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;

  img {
    width: 100%;
    height: 350px;
  }
  button {
    position: absolute;
    visibility: hidden;
    top: 264px;
    width: 70%;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      visibility: visible;
      opacity: 0.85;
    }
  }
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`;
