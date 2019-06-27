import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='footerContainer'>
            <div className='footerWrapper'>

                {/*   Основной контент располагать ниже   */}

                <Link to="/" className='footerLink'>MainPage</Link>
                <Link to="/game" className='footerLink'>GamePage</Link>
                <Link to="/search" className='footerLink'>SearchResult</Link>
                <Link to="/whyAmIHere" className='footerLink'>404</Link>
                <Link to="/back-office" className='footerLink'>Back-office</Link>
            </div>
        </div>
    );
};

export default Footer;
