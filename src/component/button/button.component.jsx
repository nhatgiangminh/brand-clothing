import './button.styles.scss'

const BUTTON_TYPES = {
  google: 'google-button',
  inverted: 'inverted-button',

}

const Button = ({buttonType, ...props}) => {
  return(
    <button className= {`${BUTTON_TYPES[buttonType]} button-container`} {...props}></button>
  )
}
export default Button;