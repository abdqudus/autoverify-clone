import { Link } from "react-router-dom";
import UseHamburgerContext from "../contexts/UseHamburgerContext";
import { closeSideBar } from "../utils/hambuger";
type Props = { dropDownItems: { text: string; route: string }[] };
const DropDown = ({ dropDownItems }: Props) => {
  const { state } = UseHamburgerContext();
  const { refs } = state;
  return (
    <div className="font-inter absolute left-[30px] font-semibold text-[#6F767E] text-[.9375rem]">
      {dropDownItems?.map((i) => {
        return (
          <p
            key={i.text}
            className="dropdown-route leading-6 py-[6px] px-4 border-collapse"
            onClick={() => closeSideBar(refs!.divRef!, refs!.inputRef!)}
          >
            <Link to={i.route}>{i.text}</Link>
          </p>
        );
      })}
    </div>
  );
};

export default DropDown;
