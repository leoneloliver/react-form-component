import React from 'react';
import logo from '../lendified-logo.png'

const Logo = props => {
    return (
        <div className="logo-container">
            <img src={logo} alt={props.alt}/>
        </div>
    )
}
export default Logo;