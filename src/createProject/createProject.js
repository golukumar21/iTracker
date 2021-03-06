import React from 'react';
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';
import './createProject.css';


// const dbUrl = "http://192.168.1.134:4000/prj";
const localUrl = "http://192.168.1.137:4000/prj";
class createProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            isLoaded: false,
            items: [],
            error: null
        }
        this.createProject = this.createProject.bind(this);
    }

    createProject() {
        if (document.getElementById('prj_name').value) {
            this.setState({
                redirect: true
            })
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/create_project' />
        }
    }
    componentDidMount() {
        fetch(localUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
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
            return (
                <Loader
                    type="Circles"
                    color="#2873cf"
                    className="loader"
                />
            );
        } else {
            return (
                <section className="landing_page">
                    <div className="main_sec">
                        {/* <h1>Welcome to iTracker</h1> */}
                        <div className="create_prj">
                            <h3>Create new project</h3>
                            <div className="new_prj">
                                <input id="prj_name" placeholder="Enter project name" />
                                {this.renderRedirect()}
                                <button onClick={this.createProject}>GO</button>
                            </div>
                        </div>
                        <span>or</span>
                        <div className="sel_prj">
                            <h3>Search project</h3>
                            <div className="sel_drp">
                                <input placeholder="Enter project name to search" />
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
                                    {items['res'].map(item => (
                                        <tr key={item._id}>
                                            <td onClick={this.navigator} id={item._id}>
                                                <Link to={`project_details/${item._id}`}>{item.pName}</Link>
                                            </td>
                                            <td>{(new Date(item.pcreateDate).toLocaleDateString())}</td>
                                            <td>{item.pStatus}</td>
                                            <td>{(new Date(item.pETA).toLocaleDateString())}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default createProject;