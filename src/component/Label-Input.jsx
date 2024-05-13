import Input from "./Input";

const LabelInput = ({
  text,
  id,
  style,
  placeholder,
  type,
  children,
  divStyle = "flex-col",
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
      <Input id={id} style={style} placeholder={placeholder} type={type} />
    </div>
  );
};

export default LabelInput;
