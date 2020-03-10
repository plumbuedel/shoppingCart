import React from 'react';



const Header = ({title}) => {

    return (
       <nav className="navbar navbar-dark bg-primary">
            <button className="link-button h4">
            {title}
            </button>
        </nav>
    );
}

export default Header;