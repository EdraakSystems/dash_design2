import React from 'react'
import './Navbar.css'
import img from '../../assets/shahab.png'

import { RiGraduationCapFill } from 'react-icons/ri'
import { AiOutlineDashboard } from 'react-icons/ai'
import { SiBookstack } from 'react-icons/si'
import { FaBookReader } from 'react-icons/fa'
import { IoCashOutline } from 'react-icons/io5'
import { TbBooks } from 'react-icons/tb'
import { IoBusOutline } from 'react-icons/io5'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { BsBarChart } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineLogout } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav_Logo'>
        <RiGraduationCapFill />
      </div>
      <hr className="horizontal_line" />
      <div className='dash_logos'>
        <button> <AiOutlineDashboard /></button>
        <button> <SiBookstack /></button>
        <button> <FaBookReader /></button>
        <button> <IoCashOutline /></button>
        <button> <TbBooks /></button>
        <button> <IoBusOutline /></button>
        <button> <HiOutlineBuildingOffice2 /></button>
        <button> <BsBarChart /></button>
      </div>
      <hr className="horizontal_line" />
      <div className='user_logos'>
        <img src={img} alt="profile" />
        <button>
          <FiSettings />
        </button>
        <button>
          <AiOutlineLogout />
        </button>
      </div>
      <button className='menu_logo'>
        <GiHamburgerMenu />
      </button>
    </div>
  )
}

export default Navbar