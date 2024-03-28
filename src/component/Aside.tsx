import { useReducer } from "react";
import { sideBarItems } from "../data";
import DropDown from "./DropDown";
import Menu from "./Menu";
import ProductsMenu from "./ProductsMenu";
import { ES, ExpandAction } from "../types/type";

const Aside = ({ style }: { style: string }) => {
  const reducer = (state: ES, action: ExpandAction): ES => {
    switch (action.type) {
      case "SET_EXPANDED_SECTION":
        return { expandedSection: action.payload };
      default:
        return state;
    }
  };
  const initialState: ES = { expandedSection: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <aside className={`${style} cursor-pointer self-start`}>
      {sideBarItems.map((i) => {
        if (i.text !== "Products") {
          return (
            <Menu state={state} dispatch={dispatch} key={i.text} menu={i}>
              <DropDown dropDownItems={i.dropDownItems} />
            </Menu>
          );
        }
        return (
          <ProductsMenu
            state={state}
            dispatch={dispatch}
            key={i.text}
            menu={i}
          />
        );
      })}
    </aside>
  );
};

export default Aside;
