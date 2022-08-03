import { FormInputContainer, Input, Label } from './form-input.styles';

const FormInput = ({ labelName, ...props }) => {
  return (
    <FormInputContainer>
      <Input {...props}></Input>
      <Label isShrink={props.value}>{labelName}</Label>
    </FormInputContainer>
  );
};
export default FormInput;
