import React from 'react';
import ActiveNavBar from '../NavBar/ActiveNavBar';
import { Outlet } from 'react-router';
import '../'

export default function Root() {
  return (
    <div className='root'>
      <ActiveNavBar/>
      <Outlet/>
    </div>
  )
}
