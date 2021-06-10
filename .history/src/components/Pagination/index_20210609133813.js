import React from 'react';
import './index.scss';

// icons 
import { BsEye } from "react-icons/bs";

function Pagination() {
    return (
        <div className="row custom-pagination">
            <div className="col-12 col-md-6">
                <p>1-8 of 140</p>
            </div>
            <div className="col-12 col-md-6">
                <ul>
                    <li><BsChevronLeft /></li>
                    <li className="active">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>...</li>
                    <li>20</li>
                    <li><BsChevronRight /></li>
                </ul>
            </div>
        </div>
    );
}

export default Pagination;