import { SyntheticEvent } from "react";
import { DivRef, ES, ExpandAction, InputRef } from "../types/type";

export const handleHamburgerClick = (
  e: SyntheticEvent,
  divRef: DivRef,
  inputRef: InputRef
) => {
  e.stopPropagation();
  if (inputRef.current?.checked === false) {
    inputRef.current.checked = true;
  }
  divRef.current?.classList.toggle("activated");
};

export const closeHamburger = (
  divRef: DivRef,
  inputRef: InputRef,
  e: SyntheticEvent
) => {
  const target = e.target as HTMLDivElement | HTMLParagraphElement;
  console.dir(target.parentElement);

  if (target.id !== "hamburger-container") return;

  divRef.current?.classList.remove("activated");
  setTimeout(() => {
    inputRef.current!.checked = false;
  }, 250);
};
export const reducer = (state: ES, action: ExpandAction): ES => {
  switch (action.type) {
    case "SET_EXPANDED_SECTION":
      return { ...state, expandedSection: action.payload };
    case "CLOSE_SIDEBAR": {
      return { ...state, isSideBarOpen: false };
    }
    case "SET_REFS": {
      return {
        ...state,
        refs: { inputRef: action.refs![0], divRef: action.refs![1] },
      };
    }
    default:
      return state;
  }
};
export const closeSideBar = (divRef: DivRef, inputRef: InputRef) => {
  if (divRef && inputRef) {
    divRef.current!.classList.remove("activated");
    setTimeout(() => {
      inputRef.current!.checked = false;
    }, 250);
  }
};
