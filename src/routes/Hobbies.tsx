import React from 'react';
import { Outlet } from 'react-router';
import HobbiesSideBar from '../NavBar/Hobbies/HobbiesSideBar';
import '../routes/HobbyRoutes/s';

export default function Hobbies() {
  return (
    <div className='Hobbies'>
      <section className='Hobbies__about'>
        <h1>ABOUT</h1>
        <div className='card'>
         <div className='card-body'>
         Hello names Edgar I am a recent grad who at first hated but now enjoys programming. 
        That being said I am a avid bicyclist and although I havent worked out recently I do like 
        excercise (see my hobbies section). I am an army reservist having been a war history buff for 
        many years (and wanting to have some excuse for a good workout).Below I have a wealth of other hobbies and the such feel free to click away at the side bar for much more
          </div>
        </div>
        
      </section>

      <section>
        <h1>HOBBIES</h1>
        <section className='Hobbies__hobbies'>
          <div className='Hobbies__sideBar'>
            <HobbiesSideBar/>
          </div>
          <div className='Hobbies__outlet'>
            <Outlet/>
          </div>
        </section>
      </section>
    </div>
  );
};
