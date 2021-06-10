import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

//icons
import { BiSearch } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ExamResults() {

    const [visible, setVisible] = useState(true);

    const openCloseMenu = () => {
        setVisible(!visible);
    }
    return (
        <div className="app">
            {visible && <Sidebar openCloseMenu={openCloseMenu} />}

            <div className="content">
                <TopBar openCloseMenu={openCloseMenu} />

                <div className="section">
                    <div className="content-body-head">
                        <h3>ExamResults</h3>
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                            <BiSearch />
                        </div>
                    </div>
                    <div className="content-body">

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamResults;