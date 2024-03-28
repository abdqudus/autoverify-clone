import { SyntheticEvent } from "react";
import { Link } from "react-router-dom";

type Props = { dropDownItems: { text: string; route: string }[] };
const DropDown = ({ dropDownItems }: Props) => {
  return (
    <div className="font-inter absolute left-[30px] font-semibold text-[#6F767E] text-[.9375rem]">
      {dropDownItems?.map((i) => {
        return (
          <p
            onClick={(e: SyntheticEvent) => e.stopPropagation()}
            key={i.text}
            className="leading-6 py-[6px] px-4 border-collapse"
          >
            <Link to={i.route}>{i.text}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default DropDown;
