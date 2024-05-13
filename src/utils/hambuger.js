export const handleHamburgerClick = (e, divRef, inputRef) => {
  e.stopPropagation();
  if (inputRef.current?.checked === false) {
    inputRef.current.checked = true;
  }
  divRef.current?.classList.toggle("activated");
};

export const closeHamburger = (divRef, inputRef, e) => {
  const target = e.target;

  if (target.id !== "hamburger-container") return;

  divRef.current?.classList.remove("activated");
  setTimeout(() => {
    inputRef.current.checked = false;
  }, 250);
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EXPANDED_SECTION":
      return { ...state, expandedSection: action.payload };
    case "CLOSE_SIDEBAR": {
      return { ...state, isSideBarOpen: false };
    }
    case "SET_REFS": {
      return {
        ...state,
        refs: { inputRef: action.refs[0], divRef: action.refs[1] },
      };
    }
    case "COLLAPSED_MENU": {
      return { ...state, collapsedMenu: action.payload };
    }

    default:
      return state;
  }
};
export const closeSideBar = (divRef, inputRef) => {
  if (divRef && inputRef) {
    divRef.current.classList.remove("activated");
    setTimeout(() => {
      inputRef.current.checked = false;
    }, 250);
  }
};
export const handleDispatch = (istoggled, dispatch, text) => {
  if (istoggled) {
    dispatch({ type: "COLLAPSED_MENU", payload: "" });
  } else {
    dispatch({ type: "COLLAPSED_MENU", payload: text });
  }
};
