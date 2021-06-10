import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Table from '../../components/Table';

//icons
import { BiSearch } from "react-icons/bi";

function ExamResults() {

    const [visible, setVisible] = useState(false);

    const openCloseMenu = () => {
        setVisible(!visible);
    }

    const columns = [
        { title: 'Name' },
        { title: 'Date' },
        { title: 'Result' },
        { title: 'Point' },
        { title: 'Classes' },
        { title: 'Time' },
        { title: 'Actions' },
    ];

    return (
        <div className="app">
            {visible && <Sidebar openCloseMenu={openCloseMenu} />}

            <div className="content">
                <TopBar openCloseMenu={openCloseMenu} />

                <div className="section">
                    <div className="content-body-head">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h3>Exam Results</h3>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="search-input">
                                    <input type="text" placeholder="Search" />
                                    <BiSearch />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-body">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamResults;