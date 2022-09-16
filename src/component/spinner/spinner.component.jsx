import { ReactComponent as SpinnerLoader } from '../../assets/Rolling.svg';
import { SpinnerContainer } from './spinner.styles';

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerLoader />
  </SpinnerContainer>
);

export default Spinner;
