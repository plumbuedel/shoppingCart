import React from 'react';

const Footer = ({ copyright }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
                <button className="link-button" >
                    {`\u00A9 ${copyright}`}
                </button>
        </nav>
    );
}

export default Footer;