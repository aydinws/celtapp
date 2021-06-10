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

export default Dashboard;