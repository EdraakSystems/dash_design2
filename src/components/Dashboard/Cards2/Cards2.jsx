import React from 'react'
import './Cards2.css'

const Cards2 = () => {
    return (
        <section className='dash_cards2'>
            <div className="cards2_table">
                <div>
                    <h3>Daily Attendance Overview</h3>
                    <h3>
                        <span>Student</span>
                        <span>Employee</span>
                    </h3>
                </div>
                <div><img src={require('../../../assets/graph.png')} alt="graph" /></div>
            </div>
            <div className="card2_progress">
                <div className="progress"><h3>Admission</h3></div>
                <div className="progress"><h3>Fees Collection</h3></div>
                <div className="progress"><h3>Syllabus</h3></div>
                <div className="progress"><h3>Sports Activity</h3></div>
            </div>
            <div className="cards2_calendar"></div>
        </section>
    )
}

export default Cards2