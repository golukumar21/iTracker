import React from 'react';
import './createProjectDet.css';

// const dbUrl = "http://192.168.1.134:4000/prj";
const localUrl = "http://192.168.1.137:4000/prj";
class createProjectDet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            redirect: false
        }
        this.submitDetails = this.submitDetails.bind(this);
    }
    submitDetails() {
        let pName = document.getElementById("pName").value;
        let pManager = document.getElementById("pManager").value;
        let pManagerEmail = document.getElementById("pManagerEmail").value;
        let pCreateDate = document.getElementById("pCreateDate").value;
        let pETA = document.getElementById("pETA").value;
        let pResourceCount = document.getElementById("pResourceCount").value;
        let pManagerContact = document.getElementById("pManagerContact").value;
        let pLead = document.getElementById("pLead").value;
        let pStatus = document.getElementById("pStatus").value;
        let pDesc = document.getElementById("pDesc").value;
        if (pName === "" || pManager === "" || pManagerEmail === "" || pCreateDate === "" ||
            pETA === "" || pResourceCount === "" || pManagerContact === "" ||
            pLead === "" || pStatus === "" || pDesc === "") {
            alert("Kindly fill all the fields!")
        } else {
            fetch(localUrl, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "pName": pName,
                    "pManager": pManager,
                    "pManagerEmail": pManagerEmail,
                    "pcreateDate": pCreateDate,
                    "pETA": pETA,
                    "pResource": pResourceCount,
                    "pManagerContact": pManagerContact,
                    "pLead": pLead,
                    "pStatus": pStatus,
                    "pDesc": pDesc
                }),
            });
            let path = `/`;
            this.props.history.push(path);
        };
    }
    render() {
        return (
            <div className="create_prjDet">
                <h1>Create New Project</h1>
                <div className="prj_createDet">
                    <div className="prj_name">
                        <label>Project Name:</label>
                        <input type="text" id="pName" placeholder="Enter project name" />
                    </div>
                    <div className="prj_mgr">
                        <label>Reporting Manager:</label>
                        <input type="text" id="pManager" placeholder="Enter manager name" />
                    </div>
                    <div className="prj_mgr_email">
                        <label>Reporting Manager E-Mail:</label>
                        <input type="email" id="pManagerEmail" placeholder="Enter reporting manager's email id" />
                    </div>
                    <div className="prj_create_date">
                        <label>Date Created:</label>
                        <input type="text" id="pCreateDate" readOnly="readOnly" placeholder="Enter manager name" value={this.state.date} />
                    </div>
                    <div className="prj_eta">
                        <label>E T A:</label>
                        <input id="pETA" type="date" />
                    </div>
                    <div className="prj_resource">
                        <label>No. of Resources:</label>
                        <input type="number" id="pResourceCount" placeholder="Enter number of resources engaged" />
                    </div>
                    <div className="prj_mgr_contact">
                        <label>Reporting Manager phone No.:</label>
                        <input type="number" id="pManagerContact" placeholder="Enter reporting manager's phone number" />
                    </div>
                    <div className="prj_lead">
                        <label>Project Lead:</label>
                        <input type="text" id="pLead" placeholder="Enter project lead" />
                    </div>
                    <div className="prj_status">
                        <label>Project Status:</label>
                        <select id="pStatus">
                            <option>Yet to Start</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                    </div>
                    <div className="prj_desc">
                        <label>Project Description:</label>
                        <textarea id="pDesc" placeholder="Enter project description"></textarea>
                    </div>
                </div>
                <button onClick={this.submitDetails}>Submit</button>
            </div>
        )
    }
}

export default createProjectDet;