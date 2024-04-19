import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { ES, ExpandAction } from "../types/type";
import { reducer } from "../utils/hambuger";

const initialState: ES = {
  expandedSection: "",
  isSideBarOpen: false,
  refs: { inputRef: null, divRef: null },
  collapsedMenu: "",
};
export const HamburgerContext = createContext<ES>(initialState);
export const DispatchContext = createContext<Dispatch<ExpandAction> | null>(
  null
);

const HamburgerContextProvider = ({ children }: { children: ReactNode }) => {
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
