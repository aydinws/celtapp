import React, { useState } from 'react';
import './index.scss';

// npm modules
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="app">

            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

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