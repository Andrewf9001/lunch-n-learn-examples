const Button = ({ children, isLoading, ...props }) => {
  return (
    <button {...props} disabled={isLoading}>
      {isLoading ? "loading..." : children}
    </button>
  );
};

export default Button;
