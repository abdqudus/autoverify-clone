import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from './Menu';
import ProductsMenu from './ProductsMenu';
import { sideBarItems } from '../Data/sidebar-data';
import DropDown from './DropDown';
import { logoutUser } from '../utils/tokenUtil';

const Aside = ({ style }) => {
  const { t } = useTranslation();
  const logout = () => logoutUser()
  return (
    <aside className={`${style} cursor-pointer self-start`}>
      {sideBarItems.map((i) => {
        const translatedText = t(i.text);
        const translatedDropDownItems = i.dropDownItems.map((dd) => ({
          ...dd,
          text: t(dd.text),
        }));

        if (i.text !== 'sidebar.products') {
          return (
            <Menu key={i.text} menu={{ ...i, text: translatedText }}>
              <DropDown dropDownItems={translatedDropDownItems} />
            </Menu>
          );
        }

        return (
          <ProductsMenu key={i.text} menu={{ ...i, text: translatedText, dropDownItems: translatedDropDownItems }} />
        );
      })}
      <button onClick={logout} className='text-left border border-blue-500 w-[90%] mx-auto rounded-[4px] flex justify-center items-center'>Log out</button>
    </aside>
  );
};

export default Aside;
