import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import SelectOption from '../../components/SelectOption';

//icons
import { BsThreeDotsVertical } from "react-icons/bs";

function Speaking() {

    const [visible, setVisible] = useState(true);

    const openCloseMenu = () => {
        setVisible(!visible);
    }

    return (
        <div className="app">

            <div class="modal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Save changes</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {visible && <Sidebar openCloseMenu={openCloseMenu} />}

            <div className="content">
                <TopBar openCloseMenu={openCloseMenu} />

                <div className="section">
                    <div className="content-body-head">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex">
                                <h3>Speaking</h3>
                                <SelectOption />
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
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-4">
                                <div className="card card--speaking">
                                    <h6>CELT English A1</h6>
                                    <BsThreeDotsVertical />
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