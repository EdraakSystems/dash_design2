import React from 'react'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'

const App = () => {
  return (
    <div className='dash_container'>
      <navbar className="Navbar"> <Navbar /></navbar>
      <div className="dashBoard"> <Dashboard /></div>
    </div>
  )
}

export default App