import React from 'react';
import './index.scss';

// npm modules
import { Link } from "react-router-dom";

// icons 
import { FaChevronLeft } from "react-icons/fa";
import { RiDashboardLine, RiCheckboxCircleLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";

// images
import Logo from '../../assets/images/logo.png';

function Sidebar({ openCloseMenu }) {
    return (
        <div className="side-bar">
            <div className="side-bar-content">
                <div className="side-bar-content-header">
                    <img src={Logo} alt="Logo" />
                    <FaChevronLeft onClick={openCloseMenu} />
                </div>
                <div className="side-bar-content-body">
                    <ul>
                        <li>
                            <Link to="/"><RiDashboardLine /> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/"><RiCheckboxCircleLine /> Check-In</Link>
                        </li>
                        <li>
                            <Link to="/"><BiBarChartAlt2 /> Exam Results</Link>
                        </li>
                    </ul>
                </div>
                <p>2021 © CELT Colleges</p>
            </div>
        </div>
    );
}

export default Sidebar;