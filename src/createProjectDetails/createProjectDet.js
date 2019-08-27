import React from 'react';
import './createProjectDet.css';

class createProjectDet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    render() {
        return (
            <div className="create_prjDet">
                <h1>Create New Project</h1>
                <div className="prj_det">
                    <div className="prj_name"> 
                        <label>Project Name:</label>
                        <input type="text" placeholder="Enter project name" />
                    </div>
                    <div className="prj_mgr">
                        <label>Reporting Manager:</label>
                        <input type="text" placeholder="Enter manager name" />
                    </div>
                    <div className="prj_status">
                        <label>Project Status:</label>
                        <select>
                            <option>Yet to Start</option>
                            <option>Started</option>
                            <option>In Progress</option>
                            <option>On Hold</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className="prj_create_date">
                        <label>Date Created:</label>
                        <input type="text" readOnly="readOnly" placeholder="Enter manager name" value={this.state.date}/>
                    </div>
                    <div className="prj_eta">
                        <label>E T A:</label>
                        <input type="date" />
                    </div>
                    <div className="prj_resource">
                        <label>No. of Resources:</label>
                        <input type="number" placeholder="Enter number of resources engaged" />
                    </div>
                    <div className="prj_desc">
                        <label>Project Description:</label>
                        <textarea placeholder="Enter project description"></textarea>
                    </div>
                </div>
                <button>Submit</button>
            </div>
        )
    }
}

export default createProjectDet;