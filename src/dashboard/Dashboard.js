import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <h1>Welcome to iTracker</h1>
                <section className="prj_overview">
                    <div className="cont">
                        <div className="det total">
                            <label>Total no. of Projects</label>
                            <h1>4</h1>
                        </div>
                    </div>
                    <div className="cont">
                        <div className="det ongoing">
                            <label>Ongoing Projects</label>
                            <h1>2</h1>
                        </div>
                    </div>
                    <div className="cont">
                        <div className="det completed">
                            <label>Completed Projects</label>
                            <h1>1</h1>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dashboard;