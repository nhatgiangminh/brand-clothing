import styled, { css } from 'styled-components';

const mainColor = 'black';
const subColor = 'grey';
const shrink = css`
  top: 5px;
  font-size: 14px;
  color: ${mainColor};
`;

export const Label = styled.label`
  font-size: 18px;
  position: absolute;
  left: 25px;
  top: 30px;
  color: ${subColor};
  transition: 300ms ease-out;
  ${({ isShrink }) => isShrink && shrink}
`;

export const FormInputContainer = styled.div`
  height: 70px;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: relative;
`;
export const Input = styled.input`
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${mainColor};
  height: 50px;
  font-size: 20px;

  &:focus {
    outline: none;
  }
  &:focus ~ ${Label} {
    ${shrink};
  }
`;

// .form-input-container {
//   height: 70px;
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   padding: 15px;
//   position: relative;

//   .form-input {
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $main-color;
//     height: 50px;
//     font-size: 20px;

//     &:focus {
//       outline: none;
//     }
//     &:focus ~ .form-label-input {

//       @include shrink();
//     }
//   }
//   .form-label-input {
//     font-size: 18px;
//     position: absolute;
//     left: 25px;
//     top: 30px;
//     color: $sub-color;
//     transition: 300ms ease-out;

//     &.shrink {

//       @include shrink();
//     }

//   }
// }
