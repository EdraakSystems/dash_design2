import React from 'react'
import './Dashboard.css'
import { BsSearch } from 'react-icons/bs'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <section className='dash_into'>
        <h1>
          School Mentor
        </h1>
        <div className="nav_search">
          <input type="text" placeholder='Search' />
          <button>
            <BsSearch />
          </button>
        </div>
      </section>
      <section className='dash_cards1'></section>
      <section className='dash_cards2'></section>
      <section className='dash_cards3'></section>
    </div>
  )
}

export default Dashboard