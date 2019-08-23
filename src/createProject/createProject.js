import React from 'react';
import './createProject.css';

class createProject extends React.Component {
    render() {
        return (
            <section className="landing_page">
                <div className="main_sec">
                    <h1>Welcome to iTracker</h1>
                    <div className="create_prj">
                        <h3>Create new project</h3>
                        <div className="new_prj">
                            <input placeholder="Enter project name" />
                            <button>GO</button>
                        </div>
                    </div>
                    <span>or</span>
                    <div className="sel_prj">
                        <h3>Search project</h3>
                        <div className="sel_drp">
                            <input placeholder="Search projects" />
                            <button>GO</button>
                        </div>
                    </div>
                    <div className="search_result">
                        <h1>Search Results:</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>Project Name</th>
                                    <th>Date Created</th>
                                    <th>Status</th>
                                    <th>E T A</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>iCAM</td>
                                    <td>26/03/2019</td>
                                    <td>Completed</td>
                                    <td>01/06/2019</td>
                                </tr>
                                <tr>
                                    <td>IAF</td>
                                    <td>05/12/2018</td>
                                    <td>In Progress</td>
                                    <td>01/12/2019</td>
                                </tr>
                                <tr>
                                    <td>SX Cycling</td>
                                    <td>01/08/2019</td>
                                    <td>Yet to Start</td>
                                    <td>01/12/2019</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default createProject;