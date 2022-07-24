import SignUp from '../../component/sign-up/sign-up.component';
import SignIn from '../../component/sign-in-form/sign-in-form.component';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
