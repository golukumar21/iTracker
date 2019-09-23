import React from 'react';
import './Dashboard.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';
// const dbUrl = "http://192.168.1.134:4000/prj";
const localUrl = "http://192.168.1.137:4000/prj";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            error: null
        }
    }
    componentDidMount() {
        fetch(localUrl+'/getCount')
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
            return (
                <Loader
                    type="Circles"
                    color="#2873cf"
                    className="loader"
                />
            );
        } else {
            return (
                <div className="dashboard">
                    {/* <h1>Welcome to iTracker</h1> */}
                    <section className="prj_overview">
                        <div className="cont">
                            <span className="view_all">
                                <Link to={`create`}>View All</Link>    
                            </span>
                            <div className="det total">
                                <label>Total no. of Projects</label>
                                <h1>{`${items['res'].total}`}</h1>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="det ongoing">
                                <label>Ongoing Projects</label>
                                <h1>{`${items['res'].ongoing}`}</h1>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="det completed">
                                <label>Completed Projects</label>
                                <h1>{`${items['res'].completed}`}</h1>
                            </div>
                        </div>
                    </section>
                </div>
            )
        }
    }
}

export default Dashboard;