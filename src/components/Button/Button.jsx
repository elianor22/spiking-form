const Button = ({ type="submit",children }) => {
  return (
    <button type={type} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {children}
    </button>
  );
};

export default Button;
