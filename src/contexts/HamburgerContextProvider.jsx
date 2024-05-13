import { createContext, useReducer } from "react";
import { reducer } from "../utils/hambuger";

const initialState = {
  expandedSection: "",
  isSideBarOpen: false,
  refs: { inputRef: null, divRef: null },
  collapsedMenu: "",
};
export const HamburgerContext = createContext(initialState);
export const DispatchContext = createContext(null);

const HamburgerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HamburgerContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </HamburgerContext.Provider>
  );
};

export default HamburgerContextProvider;
