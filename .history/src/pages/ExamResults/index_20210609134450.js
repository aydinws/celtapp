import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';
import Table from '../../components/Table';

//icons
import { BiSearch } from "react-icons/bi";

function ExamResults() {

    const [visible, setVisible] = useState(true);

    const openCloseMenu = () => {
        setVisible(!visible);
    }

    const columns = [
        { key: 'name', title: 'Name' },
        { key: 'date', title: 'Date' },
        { key: 'result', title: 'Result' },
        { key: 'point', title: 'Point' },
        { key: 'class', title: 'Classes' },
        { key: 'time', title: 'Time' },
        { key: 'action', title: 'Actions' },
    ];

    return (
        <div className="app">
            {visible && <Sidebar openCloseMenu={openCloseMenu} />}

            <div className="content">
                <TopBar openCloseMenu={openCloseMenu} />

                <div className="section">
                    <div className="content-body-head">
                        <h3>Exam Results</h3>
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                            <BiSearch />
                        </div>
                    </div>
                    <div className="content-body">
                        <Table
                            columns={columns}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamResults;