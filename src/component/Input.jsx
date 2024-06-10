

const Input = ({
  id,
  placeholder,
  type = "text",
  style = "w-full",
  value,
  readOnly = false, handleChange, accept
}) => {
  return (
    <input
      onChange={(e) => handleChange(e)}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      accept={accept}
      readOnly={readOnly}
      className={`h-[34px] ${readOnly ? 'bg-[#EEEEEE]' : ''} ${style} focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
    />
  );
};

export default Input;
