import { ReactNode } from "react";
import Input from "./Input";
type Props = {
  id: string;
  style?: string;
  placeholder?: string;
  text: string;
  type?: string;
  children?: ReactNode;
  divStyle?: string;
};
const LabelInput = ({
  text,
  id,
  style,
  placeholder,
  type,
  children,
  divStyle = "flex-col",
}: Props) => {
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
