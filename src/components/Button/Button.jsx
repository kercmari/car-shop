
import './Button.css';
const Button = ({ onClick, className, children }) =>{
  return <button type='submit' className={className} onClick={onClick}>{children}</button>
}
export default Button;
