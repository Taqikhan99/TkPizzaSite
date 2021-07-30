import React from 'react';
import { Instagram } from '@material-ui/icons';
import { Facebook } from '@material-ui/icons';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="socialmediaicons">
            <Instagram/>
            <Facebook/>
            <Twitter/>
            <LinkedIn/>
            </div>
            <p>&copy;2021 taqipizzas.khi</p>

        </div>
    );
};

export default Footer;