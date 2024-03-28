import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import Aside from "./Aside";

type Props = {
  isHamburgerOpened: boolean;
  setIsHamburgerOpened: Dispatch<SetStateAction<boolean>>;
};
const HambugerItems = ({ isHamburgerOpened, setIsHamburgerOpened }: Props) => {
  return (
    <div
      onClick={() => setIsHamburgerOpened(!isHamburgerOpened)}
      className={`${
        isHamburgerOpened ? "opacity-100 overflow-y-hidden" : "w-0 opacity-0"
      } bg-black lg:hidden transition-opacity h-svh  bg-opacity-50 absolute inset-0`}
    >
      <div
        onClick={(e: SyntheticEvent) => e.stopPropagation()}
        className={`${isHamburgerOpened ? "animate-slide-in" : " "} 
        } bg-[#d7eaf7] h-full w-0 transition-[width] overflow-hidden absolute left-0 top-0`}
      >
        <Aside style="block py-6" />
      </div>
    </div>
  );
};

export default HambugerItems;
