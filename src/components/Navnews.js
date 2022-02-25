import React from 'react'
import './Navnews.css';
import HamburgerDrawer from './HamburgerDrawer';

const Navnews = ({setCategory}) => {
    return (
        <div className='nav'> 
        <div className='logo'>
            Newzy
        </div>

        <div className='Menulist'>
            <HamburgerDrawer setCategory ={setCategory}/>
        </div>
         </div>
    )
}

export default Navnews
