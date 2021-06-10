import React from 'react';
import './index.scss';

// icons 
import { FaChevronDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoThreeBars } from "react-icons/go";

// images
import Avatar from '../../assets/images/avatar.png';
import Logo from '../../assets/images/logo.png';

function TopBar({ openCloseMenu }) {
    return (
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
    );
}

export default TopBar;