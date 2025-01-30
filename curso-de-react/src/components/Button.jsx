
function Button({ children, className, ...props }) {
    return (
      <button
        className={`bg-slate-400 rounded-md p-2 text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  
  export default Button;