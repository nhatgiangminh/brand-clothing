import SignUp from '../../component/sign-up/sign-up.component';
import SignIn from '../../component/sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};
export default Authentication;
