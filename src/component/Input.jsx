

const Input = ({
  id,
  placeholder,
  type = "text",
  style = "w-full",
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`h-[34px] ${style} focus:bg-[#EEEEEE] outline-1 outline-[#CCCCCC]  rounded-[4px] border border-[#CCCCCC] px-4`}
    />
  );
};

export default Input;
