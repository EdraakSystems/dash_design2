import React from 'react'
import './Cards2.css'
import { Chart } from "react-google-charts";
import Calendarr from './Calendarr';

const Cards2 = () => {
    const data = [
        ["none", "", ""],
        [0, 0, 0],
        [1, 10, 5],
        [2, 23, 15],
        [3, 17, 9],
        [4, 18, 10],
        [5, 9, 5],
        [6, 11, 3],
        [7, 27, 19],
    ];
    const options = {
        series: {
            0: { curveType: "function" },
            1: { curveType: "function" }
        },
    };
    return (
        <section className='dash_cards2'>
            <div className="cards2_table cards2_width">
                <div>
                    <h3>Daily Attendance Overview</h3>
                    <h3>
                        <span>Student</span>
                        <span>Employee</span>
                    </h3>
                </div>
                <div>
                    <Chart
                        chartType="LineChart"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
                </div>
            </div>
            <div className="card2_progress cards2_width">
                <div className="progress">
                    <h3>Admission</h3>
                    <div class="progress-bar1">
                        <progress value="75" min="0" max="100" style={{ visibility: 'hidden', height: 0, width: 0 }}>75%</progress>
                    </div>
                </div>
                <div className="progress">
                    <h3>Fees Collection</h3>
                    <div class="progress-bar2">
                        <progress value="75" min="0" max="100" style={{ visibility: 'hidden', height: 0, width: 0 }}>75%</progress>
                    </div>
                </div>
                <div className="progress">
                    <h3>Syllabus</h3>
                    <div class="progress-bar3">
                        <progress value="75" min="0" max="100" style={{ visibility: 'hidden', height: 0, width: 0 }}>75%</progress>
                    </div>
                </div>
                <div className="progress">
                    <h3>Sports Activity</h3>
                    <div class="progress-bar4">
                        <progress value="75" min="0" max="100" style={{ visibility: 'hidden', height: 0, width: 0 }}>75%</progress>
                    </div>
                </div>
            </div>
            <div className="cards2_calendar cards2_width">
                <Calendarr />
            </div>
        </section>
    )
}

export default Cards2