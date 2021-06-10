import React from 'react';
import './index.scss';

// icons 
import { BsEye } from "react-icons/bs";

// components
import Pagination from '../Pagination';

function Table() {
    return (
        <div>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>{column.title}</th> })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span>Name:</span> B1 end of course A</td>
                        <td><span>Date:</span> 19/05/2021</td>
                        <td><span>Results:</span> <p className="red">Failed</p> </td>
                        <td><span>Point:</span> 30</td>
                        <td><span>Classes:</span> CELT English B1+</td>
                        <td><span>Time:</span> 6 min</td>
                        <td>
                            <span>Actions:</span> <BsEye className="orange c-pointer" />
                        </td>
                    </tr>
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
            <Pagination />
        </div>
    );
}

export default Table;