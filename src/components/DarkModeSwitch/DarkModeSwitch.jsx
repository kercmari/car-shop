import './DarkModeSwitch.css';
const DarkModeSwitch = ({ toggleDarkMode ,isDarkMode}) => {
 console.log(isDarkMode);

 

  return (
    <div className="dark-mode-switch" onClick={toggleDarkMode}>
      {isDarkMode ? <i className="fas fa-moon"  style={{ color: 'white' }}></i> : <i className="fas fa-moon" ></i>}
    </div>
  );
};

export default DarkModeSwitch;