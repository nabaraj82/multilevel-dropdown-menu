import React from 'react'
import {menuItems} from '../menuItems'
import MenuItems from './MenuItems'
const Navbar = () => {
  const depthLevel = 0
  return (
    <nav>
        <ul className='menus'>
            {menuItems.map((menu, index) =>{
                return(
                    <MenuItems 
                    key={index} 
                    items={menu }
                    depthLevel={depthLevel}
                     />
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar