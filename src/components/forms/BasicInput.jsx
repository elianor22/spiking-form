import PropTypes from "prop-types";
const BasicInput = ({
  id,
  name,
  value,
  onChange,
  type = "text",
  label,
  placeholder,
}) => {
  return (
    <div className="mb-3"
      style={{
        width: "100%",
      }}
    >
      <label htmlFor={name} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

BasicInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
};

export default BasicInput;
