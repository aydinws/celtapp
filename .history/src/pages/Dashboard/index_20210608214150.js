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

function Dashboard() {

    const [visible, setVisible] = useState(false);
    return (
        <div className="app">
            <Sidebar />

            <div className="content">
                {visible && <TopBar />}

                <div className="section">
                    <div className="content-body-head">
                        <h3>Dashboard</h3>
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
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Exam Results</h4>
                                        <AiOutlineFileAdd className="d-none" />
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="custom-checkbox" />
                                                <span className="checkmark"></span>
                                                <div>B1+ UNIT 3A</div>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="custom-checkbox" />
                                                <span className="checkmark"></span>
                                                <div>B1+ UNIT 1A</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="/">View all <FaChevronRight /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Take an Exam</h4>
                                        <AiOutlineFileAdd className="d-none" />
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" name="a" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 3A</div>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" name="a" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 9b</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="/">View all <FaChevronRight /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4 anime-h">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Check-In</h4>
                                        <RiCheckboxCircleLine />
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
                                    <a href="/" className="d-none">View all <FaChevronRight /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4 anime-h">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Speaking Reviews</h4>
                                        <AiOutlineFileAdd />
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="custom-checkbox" />
                                                <span className="checkmark"></span>
                                                <div>B1+ UNIT 3A</div>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" className="custom-checkbox" />
                                                <span className="checkmark"></span>
                                                <div>B1+ UNIT 1A</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="/" className="d-none">View all <FaChevronRight /></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4 anime-h">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Essay Reviews</h4>
                                        <BiBarChartAlt2 />
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" name="a" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 3A</div>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" name="a" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 9b</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="/" className="d-none">View all <FaChevronRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Dashboard;