import { sideBarItems } from "../Data/sidebar-data";
import DropDown from "./DropDown";
import Menu from "./Menu";
import ProductsMenu from "./ProductsMenu";
type Props = {
  style: string;
};
const Aside = ({ style }: Props) => {
  return (
    <aside className={`${style} cursor-pointer self-start`}>
      {sideBarItems.map((i) => {
        if (i.text !== "Products") {
          return (
            <Menu key={i.text} menu={i}>
              <DropDown dropDownItems={i.dropDownItems} />
            </Menu>
          );
        }
        return <ProductsMenu key={i.text} menu={i} />;
      })}
    </aside>
  );
};

export default Aside;
