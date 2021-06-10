import React from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

//icons
import { FaChevronRight } from "react-icons/fa";

function Dashboard() {
    return (
        <div className="app">
            <Sidebar />

            <div className="content">
                <TopBar />

                <div className="section">
                    <div className="content-body-head">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="content-body">
                        <div className="row d-flex">
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Homework TODO</h4>
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
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Homework TODO</h4>
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
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Homework TODO</h4>
                                    </div>
                                    <ul>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 3A</div>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="radio" className="custom-radio" />
                                                <span className="radiomark"></span>
                                                <div>B1+ UNIT 1A</div>
                                            </label>
                                        </li>
                                    </ul>
                                    <a href="/">View all <FaChevronRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                    dd <br />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;