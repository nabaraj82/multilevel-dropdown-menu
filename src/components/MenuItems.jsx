import React, { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false)
  return (
    <li className='menu-items'>
                       {
                        items.submenu?
                        (
                        <>
                        <button type="button" 
                        arial-aria-haspopup="menu"
                        aria-expanded={ dropdown ?"true":"false"}
                        onClick={()=> setDropdown(prev => !prev)}
                        >
                            {items.title} {" "}
                        </button>
                        <Dropdown 
                        submenus={items.submenu}
                        dropdown={dropdown}
                         />
                        </>
                        )
                        :
                        (
                            <>
                            <a href={items.url}>{items.title}</a>
                            </>
                        )
                       }
    </li>
  );
};

export default MenuItems;
