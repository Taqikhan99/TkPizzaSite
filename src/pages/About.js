import React from 'react';
import pizzaAbout from '../assets/pizzaAbout.jpg'
import '../styles/about.css'
const About = () => {
    return (
        <div className='container-fluid'>
           
           <div className="imageSec" style={{backgroundImage:`url(${pizzaAbout})`}} >

           </div>
           <div className="textSec2 ">
           <h1 className='text-center'>About us</h1>
           <p className='text-center'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error beatae, tenetur aperiam odio temporibus mollitia. Repellendus accusantium expedita veritatis rerum ullam qui cumque voluptates quos exercitationem deserunt distinctio assumenda voluptatem magnam cum, quis maxime, natus minus odio, aut aliquid amet dolor. Dolores quae autem ipsam vel! Eum expedita, culpa incidunt dolorum, tempora amet aut dignissimos aspernatur animi nulla omnis, eveniet est suscipit provident. Est quam tempore aliquid nulla accusantium quasi consectetur omnis corrupti ullam sint voluptatibus perferendis, consequatur labore. Consequuntur!
           </p>
           </div>
           
               
            
        </div>
    );
};

export default About;<h1>About Page</h1>