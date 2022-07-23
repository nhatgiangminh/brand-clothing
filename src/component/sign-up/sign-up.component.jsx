import { useState,  } from "react";
import {createUserWithEmail, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";

//form field object
const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}
//component
const SignUp = () => {

  const [formField, setFormField] = useState(defaultFormField);
  //destructuring
  const {displayName, email, password, confirmPassword} = formField;
  //handle value from input form.
  // console.log(formField);
  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormField({...formField, [name]: value});
  }
  //onSubmit event handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Password does not match');
      return;
    }
    try
    {
      const response = await createUserWithEmail(email, password);
      console.log(response);
      await createUserDocumentFromAuth(response.user, {displayName});
    }
    catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Email is already in use');
      }
      else console.log(error);
    }
  }
  
  return(
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormInput labelName={'Display Name'} required type='text' value={displayName} onChange={handleChange} name='displayName'/>

       
        <FormInput labelName={'Email'} required type='email' value={email} onChange={handleChange} name='email'/>

       
        <FormInput labelName={'Password'} required type='password' value={password} onChange={handleChange} name='password'/>

        
        <FormInput labelName={'Confirm Password'} required type='password' value={confirmPassword} onChange={handleChange} name='confirmPassword'/>
        {/* <p style={{visibility: 'visible'}}>Password does not match</p> */}

        <input type='submit' value='submit'/>
      </form>
    </div>
  )
}
export default SignUp;