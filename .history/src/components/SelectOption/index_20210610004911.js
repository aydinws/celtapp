import React from 'react';
import './index.scss';

// icons 
import { BsChevronDown } from "react-icons/bs";

function Select() {
    const [visible, setVisible] = useState(false);
    return (
        <div className="select-option">
            <div className="select-option-btn">
                <span>CELT English A1</span>
                {visible && <BsChevronDown />}
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