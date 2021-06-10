import React from 'react';
import './index.scss';

// icons
import { FaChevronLeft } from "react-icons/fa";

// images
import Logo from '../../assets/images/logo.png';

function Sidebar() {
    return (
        <div className="side-bar">
            <div className="side-bar-content">
                <div className="side-bar-content-header">
                    <img src={Logo} alt="Logo" />
                    <FaChevronLeft />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;