import { sideBarItems } from "../data";
import Menu from "./Menu";
import ProductsMenu from "./ProductsMenu";

const Aside = () => {
  return (
    <aside className="hidden cursor-pointer self-start lg:grid">
      {sideBarItems.map((i) => {
        if (i.text !== "Products") {
          return <Menu {...i} />;
        }
        return <ProductsMenu {...i} />;
      })}
    </aside>
  );
};

export default Aside;
