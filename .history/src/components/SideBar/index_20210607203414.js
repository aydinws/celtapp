import React from 'react';
import './index.scss';

// images
import Logo from '../../assets/images/logo.png';

function Sidebar() {
    return (
        <div className="side-bar">
            <div className="side-bar-content">
                <div className="side-bar-content-header">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;