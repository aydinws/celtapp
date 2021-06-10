import React, { useState } from 'react';
import './index.scss';

// icons 
import { BsChevronDown } from "react-icons/bs";

function Select() {
    const [visible,] = useState(false);
    return (
        <div className="select-option">
            {visible && <div className="select-option-items">
                <ul>
                    <li><a href="/">Exam Results</a></li>
                    <li><a href="/">Exam Dates</a></li>
                </ul>
            </div>}
        </div>
    );
}

export default Select;