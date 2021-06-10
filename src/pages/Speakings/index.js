import React, { useState } from 'react';
import './index.scss';

// npm modules
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import SelectOption from '../../components/SelectOption';

//icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsMic } from "react-icons/bs";

function Speaking() {

    const [visible, setVisible] = useState(true);

    const openCloseMenu = () => {
        setVisible(!visible);
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="app">

            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <table>
                                <tr>
                                    <td className="t-head">Title:</td>
                                    <td className="t-value">A1 Unit 6A</td>
                                </tr>
                                <tr>
                                    <td className="t-head">Questions:</td>
                                    <td className="t-value">
                                        Talk about Breakfast <br />
                                Lorem ipsum <br />
                                Lorem ipsum <br />
                                Lorem ipsum <br />
                                Please  talk around <br />
                                    </td>
                                </tr>
                            </table>

                            <div className="row">
                                <div className="col-10"><SelectOption /></div>
                                <div className="col-2">
                                    <button className="btn--circle">
                                        <BsMic />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 offset-md-6">
                            <div className="d-flex justify-content-around">
                                <button className="custom-btn custom-btn--white-blue">Delete Recording</button>
                                <button className="custom-btn custom-btn--orange">Save</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            {visible && <Sidebar openCloseMenu={openCloseMenu} />}

            <div className="content">
                <TopBar openCloseMenu={openCloseMenu} />

                <div className="section">
                    <div className="content-body-head">
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex">
                                <h3>Speaking</h3>
                                <div className="out-cls"><SelectOption /></div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <div className="row">
                            {new Array(12).fill('').map(() =>
                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="card card--speaking" onClick={toggle}>
                                        <div className="card-circle">
                                            <p>General english</p>
                                        </div>
                                        <h6>CELT English A1</h6>
                                    </div>
                                </div>
                            )}

                            {new Array(12).fill('').map(() =>
                                <div className="col-12 col-md-6 col-lg-4 mb-4">
                                    <div className="card card--speaking">
                                        <h6>CELT English A1</h6>
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Speaking;