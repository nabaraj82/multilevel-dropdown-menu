import React from 'react'
import {menuItems} from '../menuItems'
import MenuItems from './MenuItems'
const Navbar = () => {
  return (
    <nav>
        <ul className='menus'>
            {menuItems.map((menu, index) =>{
                return(
                    <MenuItems key={index} items={menu } />
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar