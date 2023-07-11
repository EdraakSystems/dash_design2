import React from 'react'
import './Cards1.css'

const Cards1 = () => {
    return (
        <section className='dash_cards1'>
            <div className="cards1_data card_bg1">
                <h1>3256</h1>
                <h2>Students</h2>
            </div>
            <div className="cards1_data card_bg2">
                <h1>68</h1>
                <h2>Employees</h2>
            </div>
            <div className="cards1_data card_bg3">
                <h1>16</h1>
                <h2>Course</h2>
            </div>
            <div className="cards1_data card_bg4">
                <h1>3,47,00</h1>
                <h2>Revenue</h2>
            </div>
            <div className="cards1_data card_bg5">
                <h4>10/04/2009 Schedule</h4>
                <h5>1. Meeting with teachers</h5>
                <h5>2. Plan Picnic for Students</h5>
            </div>
        </section>
    )
}

export default Cards1