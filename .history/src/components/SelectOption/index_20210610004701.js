import React from 'react';
import './index.scss';

// npm modules
import { Link } from "react-router-dom";

// icons 
import { FaChevronLeft } from "react-icons/fa";
import { BsMic } from "react-icons/bs";
import { RiDashboardLine } from "react-icons/ri";
import { BiBarChartAlt2 } from "react-icons/bi";

function Select({ openCloseMenu }) {
    return (

        <div className="select-option">
            <div className="select-option-btn">
                <span>CELT English A1</span>
                <BsChevronDown />
            </div>
            <div className="select-option-items">
                <ul>
                    <li><a href="/">Exam Results</a></li>
                    <li><a href="/">Exam Dates</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Select;