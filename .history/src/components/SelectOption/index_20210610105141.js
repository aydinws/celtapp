import React, { useState } from 'react';
import './index.scss';

// icons 
import { BsChevronDown } from "react-icons/bs";

function Select() {
    const [visible,] = useState(false);
    return (
        <div className="select-option">
            <div className="select-option-btn">
                <span>CELT English A1</span>
                <BsChevronDown />
            </div>
        </div>
    );
}

export default Select;