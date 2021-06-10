import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

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
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex">
                                <h3>Speaking</h3>
                                <div className="select-option">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <div className="card-circle">
                                        <p>General english</p>
                                    </div>
                                    <h6>CELT English A1</h6>
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