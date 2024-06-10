import Input from "./Input";

const LabelInput = ({
  text,
  id,
  style,
  placeholder,
  type,
  children,
  divStyle = "flex-col",
  readOnly = false,
  value = '',
  handleChange, accept
}) => {
  return (
    <div className={`flex ${divStyle} gap-2`}>
      <label
        htmlFor={id}
        className="text-sm block font-open-sans leading-[22.4px] text-[#333333]"
      >
        {text}
        {children}
      </label>
      <Input accept={accept} handleChange={handleChange} value={value} readOnly={readOnly} id={id} style={style} placeholder={placeholder} type={type} />
    </div>
  );
};

export default LabelInput;
