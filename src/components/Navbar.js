import React,{useState} from 'react';
import plogo from '../assets/pizzalogo.jpg'
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

const Navbar = () => {
    const [hLinks,setHlinks]=useState(false)

    const toggleHLinks=()=>{
        setHlinks(!hLinks)
    }

    const closeNav=()=>{
        setHlinks(!hLinks)
    }
    return (
        <div className='Navbar'>
            <div className="leftside">
                <img src={plogo} alt="" />
                <div className="hiddenlinks" id={hLinks?"open":"close"}>
                <Link onClick={closeNav} to="/" >Home</Link>
                <Link onClick={closeNav} to="/menu" >Menu</Link>
                <Link onClick={closeNav} to="/about" >About</Link>
                <Link onClick={closeNav} to="/contact" >Contact</Link>
                </div>
                
            </div>
            <div className="rightside">
                <div className="navlist">
                <Link to="/" >Home</Link>
                <Link  to="/menu" >Menu</Link>
                <Link to="/about" >About</Link>
                <Link to="/contact" >Contact</Link>
                <button className='toggleBtn' onClick={toggleHLinks}>
                <ReorderIcon/>
                </button>
                
                </div>
                

            </div>
            
        </div>
    );
};

export default Navbar;