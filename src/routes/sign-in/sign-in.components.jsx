import {createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import SignUp from '../../component/sign-up/sign-up.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  }

  return(
    <div>
      <div>
        <h1>
          Sign In
        </h1>
        <button onClick={logGoogleUser}>Sign in with google popup</button>
      </div>
      <SignUp />
    </div>
    
  )
}
export default SignIn;