import React from 'react';
import './index.scss';

// icons 
import { BsEye } from "react-icons/bs";

// components
import Pagination from '../Pagination';

function Table({ columns }) {
    return (
        <div className="table-responsive">
            <table class="custom-table">
                <thead>
                    <tr>
                        {columns.map(column => { return <th>{column.title}</th> })}
                    </tr>
                </thead>
                <tbody>
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