import React from 'react';
import './index.scss';

// icons 
import { FaChevronDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

// images
import Avatar from '../../assets/images/avatar.png';

function TopBar() {
    return (
        <div className="top-bar">
            <ul>
                <li>
                    <span>EN <FaChevronDown /></span>
                </li>
                <li>
                    <BsBell />
                </li>
                <li>
                    <FiSettings />
                </li>
                <li>
                    <img src={Avatar} alt="Avatar" />
                    <span>Aydın Mamedov</span>
                    <FaChevronDown />
                </li>
            </ul>
        </div>
    );
}

export default TopBar;