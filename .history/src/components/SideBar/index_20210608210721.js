import React from 'react';
import './index.scss';

// icons 
import { FaChevronLeft } from "react-icons/fa";
import { RiDashboardLine, RiCheckboxCircleLine } from "react-icons/ri";

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
                <div className="side-bar-content-body">
                    <ul>
                        <li><a href="/"> <RiDashboardLine /> Dashboard</a></li>
                        <li><a href="/"> <RiCheckboxCircleLine /> Check-In</a></li>
                    </ul>
                </div>
                <p>2021 © CELT Colleges</p>
            </div>
        </div>
    );
}

export default Sidebar;