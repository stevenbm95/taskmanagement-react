
const Button = ({ custom, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${custom} text-sm border-1 border-cyan-700 p-2 rounded-sm hover:cursor-pointer text-cyan-700 `}
    >
      {text}
    </button>
  );
};

export default Button;
