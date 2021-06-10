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
                        <table class="custom-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Result</th>
                                    <th>Points</th>
                                    <th>Classes</th>
                                    <th>Time</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="1">
                                    <td>B1 end of course A</td>
                                    <td>19/05/2021</td>
                                    <td className="red">Failed</td>
                                    <td>30</td>
                                    <td>CELT English B1+</td>
                                    <td>6 min</td>
                                    <td>
                                        <BsEye className="orange c-pointer" />
                                    </td>
                                </tr>
                                <tr key="2">
                                    <td>B1 end of course A</td>
                                    <td>19/05/2021</td>
                                    <td className="green">Passed</td>
                                    <td>30</td>
                                    <td>CELT English B1+</td>
                                    <td>6 min</td>
                                    <td>
                                        <BsEye className="orange c-pointer" />
                                    </td>
                                </tr>
                                <tr key="3">
                                    <td>B1 end of course A</td>
                                    <td>19/05/2021</td>
                                    <td className="green">Passed</td>
                                    <td>30</td>
                                    <td>CELT English B1+</td>
                                    <td>6 min</td>
                                    <td>
                                        <BsEye className="orange c-pointer" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row custom-pagination">
                            <div className="col-12 col-md-6">
                                <p>1-8 of 140</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamResults;