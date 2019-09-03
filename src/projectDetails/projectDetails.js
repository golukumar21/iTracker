import React from 'react';
import './projectDetails.css';


const dbUrl = "http://192.168.1.134:4000/prj";
// const localUrl = "http://localhost:4000/prj";

class projectDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            isLoaded: false,
            items: [],
            error: null
        }
    }
    componentDidMount() {
        fetch(dbUrl + '/' + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="create_prjDet">
                <h1>{items['res'].pName}</h1>
                <div className="prj_createDet">
                    <div className="prj_name">
                        <label>Project Name:</label>
                        <input type="text" value={`${items['res'].pName}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_mgr">
                        <label>Reporting Manager:</label>
                        <input type="text" value={`${items['res'].pManager}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_mgr_email">
                        <label>Reporting Manager E-Mail:</label>
                        <input type="email" value={`${items['res'].pManagerEmail}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_create_date">
                        <label>Date Created:</label>
                        <input type="text" value={`${new Date(items['res'].pcreateDate).toLocaleDateString()}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_eta">
                        <label>E T A:</label>
                        <input type="text" value={`${new Date(items['res'].pcreateDate).toLocaleDateString()}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_resource">
                        <label>No. of Resources:</label>
                        <input type="number" value={`${items['res'].pResource}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_mgr_contact">
                        <label>Reporting Manager phone No.:</label>
                        <input type="number" value={`${items['res'].pManagerContact}`} readOnly="readOnly" />
                    </div>
                    <div className="prj_lead">
                        <label>Project Lead:</label>
                        <input type="text" value={`${items['res'].pLead}`} readOnly="readOnly" />
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
                    <div className="prj_desc">
                        <label>Project Description:</label>
                        <textarea value={`${items['res'].pDesc}`} readOnly="readOnly"></textarea>
                    </div>
                </div>
                <button onClick={this.submitDetails}>Submit</button>
            </div>
            )
        }

    }
}

export default projectDetails;