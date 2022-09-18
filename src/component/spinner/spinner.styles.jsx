import styled from 'styled-components';
import { ReactComponent as SpinnerLoader } from '../../assets/Rolling.svg';

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 100%;
  margin-top: 200px;
  @media screen and (max-width: 600px) {
    margin-top: 40%;
  }
`;

export const CircleProcessing = styled(SpinnerLoader)`
  height: 150px;
  width: 150px;
  @media screen and (max-width: 600px) {
    height: 80px;
    width: 80px;
  }
`;
