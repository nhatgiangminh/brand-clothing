import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from './button.styles.js';

export const BUTTON_TYPES = {
  base: 'base',
  google: 'google-button',
  inverted: 'inverted-button',
};
const getButton = (buttonType = BUTTON_TYPES.base) =>
  ({
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.google]: GoogleButton,
    [BUTTON_TYPES.inverted]: InvertedButton,
  }[buttonType]);

export const Button = ({ children, buttonType, isLoading, ...props }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...props}>
      {isLoading ? <ButtonSpinner /> : children}
    </CustomButton>
  );
};
