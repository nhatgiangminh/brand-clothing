import { useState } from 'react';
import {
  signInWithEmail,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

//form field object
const defaultFormField = {
  email: '',
  password: '',
};
//component
const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField);
  //destructuring
  const { email, password } = formField;
  //handle value from input form.
  // console.log(formField);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  //onSubmit event handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInWithEmail(email, password);
      console.log(response);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Password is invalid');
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found');
      }
    }
  };
  //sign in with google account
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      console.log(response);
      await createUserDocumentFromAuth(response.user);
    } catch (error) {}
  };

  return (
    <div className='sign-in-container'>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelName={'Email'}
          required
          type='email'
          value={email}
          onChange={handleChange}
          name='email'
        />

        <FormInput
          labelName={'Password'}
          required
          type='password'
          value={password}
          onChange={handleChange}
          name='password'
        />

        {/* <p style={{visibility: 'visible'}}>Password does not match</p> */}
        <div className='sign-in-button-container'>
          <Button type='submit'> Log In </Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            {' '}
            Log in with Google{' '}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
