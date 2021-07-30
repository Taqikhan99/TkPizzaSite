import React from 'react';
import pizzawall from '../assets/pizzawall2.jpg'
import '../styles/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='container-fluid ' >
            <div className="header" style={{backgroundImage:`url(${pizzawall})`}}>
                <div className="textSec">
                <h1>Taqi's Pizza</h1>
                <p>We provide delicious pizza's that make you lick your fingers</p>
                <Link to='/menu'>
                <button className="btn btn-success">Order Now</button>
                </Link> 
                </div>
                
            </div>
        </div>
    );
};

export default Home;