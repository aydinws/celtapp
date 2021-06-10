import React, { useState } from 'react';
import './index.scss';

// components
import Sidebar from '../../components/SideBar';
import TopBar from '../../components/TopBar';

//icons
import { BiSearch } from "react-icons/bi";
import { BsEye } from "react-icons/bs";

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
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                            <BiSearch />
                        </div>
                    </div>
                    <div className="content-body">
                        <table>
                            <thead>
                                <th>
                                    <td>Name</td>
                                    <td>Date</td>
                                    <td>Result</td>
                                    <td>Points</td>
                                    <td>Classes</td>
                                    <td>Time</td>
                                    <td>Actions</td>
                                </th>
                            </thead>
                            <tbody>
                                <tr key="1">
                                    <td>B1 end of course A</td>
                                    <td>19/05/2021</td>
                                    <td>Failed</td>
                                    <td>30</td>
                                    <td>CELT English B1+</td>
                                    <td>6 min</td>
                                    <td>
                                        <BsEye />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ExamResults;