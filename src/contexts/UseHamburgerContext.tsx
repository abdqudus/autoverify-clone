import { useContext } from "react";
import { DispatchContext, HamburgerContext } from "./HamburgerContextProvider";

const UseHamburgerContext = () => {
  const dispatch = useContext(DispatchContext);
  const state = useContext(HamburgerContext);
  return { state, dispatch };
};

export default UseHamburgerContext;
