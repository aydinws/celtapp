import React from 'react';
import './index.scss';

// icons 
import { FaChevronDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

// images
import Logo from '../../assets/images/logo.png';

function TopBar() {
    return (
        <div className="top-bar">
            <ul>
                <li>
                    EN <FaChevronDown />
                </li>
                <li>
                    <BsBell />
                </li>
            </ul>
        </div>
    );
}

export default TopBar;