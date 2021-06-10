import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

//icons
import { FaChevronRight } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";
import { BiBarChartAlt2 } from "react-icons/bi";

function Speaking() {

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
                        <h3>Speaking</h3>
                    </div>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Homework TODO</h4>
                                        <AiOutlineFileAdd className="d-none" />
                                    </div>
                                    <ul>
                                        <li>
                                            <h4>HW U4 L3</h4>
                                            <p>CELT English A2</p>
                                        </li>
                                        <li>
                                            <h4>HW U2 L3</h4>
                                            <p>CELT English A2</p>
                                        </li>
                                    </ul>
                                    <a href="/">View all <FaChevronRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speaking;