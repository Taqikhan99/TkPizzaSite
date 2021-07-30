import React from 'react';
import {Menulist} from '../helpers/Menulist'
import '../styles/menu.css'
const Menu = () => {
    return (
        <div className='container menu'>
            <h1 className='text-center mt-3 '>Our Menu</h1>
             <div className="menulist mt-3">
                 {Menulist.map((pizza,key)=>{
                       return <div className='pizzacard'>
                           <img src={pizza.image} alt="" />
                           <h3>{pizza.name}</h3>
                           <h5>Size: {pizza.size}</h5>
                           <h5>Price: {pizza.price}</h5>
                           
                       </div> 
                 })}
            </div>   
        </div>
    );
};

export default Menu;