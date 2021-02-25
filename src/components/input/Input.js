import styles from './Input.module.scss';

function Input({
  name = '',
  label
}) {
  return (
    <div>
      <input type="text" id={`input_${name}`} />
      {label ? <label for={`input_${name}`}>{label}</label> : null }
    </div>
  )
}

export default Input;