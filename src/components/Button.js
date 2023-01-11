import './Button.css';

function Button({text, color}) {
  return (
    <div className="button-container">
      <button className="btn {color}">{text}</button>
    </div>
  );
}

export default Button;