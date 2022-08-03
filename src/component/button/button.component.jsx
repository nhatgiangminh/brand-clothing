import { BaseButton, GoogleButton, InvertedButton } from './button.styles.js';

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

export const Button = ({ buttonType, ...props }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...props}></CustomButton>;
};
