import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png'

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Renatoflix logo" />
            </a>

            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );
}

export default Menu;