import './form-input.styles.scss'

const FormInput = ({labelName, ...props}) => {
  return(
    <div className="form-input-container">
      <input className="form-input" {...props}></input>
      <label className={`${props.value ? 'shrink' : ''} form-label-input`}>{labelName}</label>
    </div>
  )
}
export default FormInput;