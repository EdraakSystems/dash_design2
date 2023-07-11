import React from 'react'
import './Dashboard.css'
import { BsSearch } from 'react-icons/bs'
import { BsChatText } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import Cards1 from './Cards1/Cards1'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <section className='dash_into'>
        <div className='heading'>
          <span class="school">School</span>
          <span class="mentor">Mentor</span>
        </div>
        <div className="dash_intro_logo">
          <div className="dash_intro_search">
            <input type="text" placeholder='Search' />
            <button>
              <BsSearch />
            </button>
          </div>
          <button className='border'><BsChatText /></button>
          <button className='border'><IoIosNotificationsOutline /></button>
        </div>
      </section>
      <section><Cards1 /></section>
      <section className='dash_cards2'></section>
      <section className='dash_cards3'></section>
    </div>
  )
}

export default Dashboard