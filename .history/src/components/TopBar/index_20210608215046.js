import React from 'react';
import './index.scss';

// icons 
import { FaChevronDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";

// images
import Avatar from '../../assets/images/avatar.png';
import Logo from '../../assets/images/logo.png';

function TopBar({ openCloseMenu }) {
    return (
        <div className="top-bar">
            <img src={Logo} alt="Logo" />
            <ul>
                <li>
                    <span>EN <FaChevronDown /></span>
                </li>
                <li>
                    <BsBell />
                </li>
                <li>
                    <FiSettings onClick={openCloseMenu} />
                </li>
                <li>
                    <img src={Avatar} alt="Avatar" />
                    <span>Aydın Mamedov</span>
                    <FaChevronDown />
                </li>
                <li>
                    <GoThreeBars onClick={openCloseMenu} />
                </li>
            </ul>
        </div>
    );
}

export default TopBar;