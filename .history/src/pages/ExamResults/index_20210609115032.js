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

function ExamResults() {

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
                        <h3>ExamResults</h3>
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="content-body">
                        <div className="row">



                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExamResults;