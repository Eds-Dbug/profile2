import React from 'react';
import { Outlet } from 'react-router';

export default function Hobbies() {
  return (
    <div className='Hobbies'>
      <section className='Hobbies__about'>
        <h1>About</h1>
        <p>Hello names Edgar I am a recent grad who at first hated but now enjoys programming. 
        That being said I am a avid bicyclist and although I havent worked out recently I do like 
        excercise (see my hobbies section). I am an army reservist having been a war history buff for 
        many years (and wanting to have some excuse for a good workout).Below I have a wealth of other hobbies and the such feel free to click away at the side bar for much more</p>
      </section>

      <section>
        <h1>Hobbies</h1>
        <section className='Hobbies__hobbies'>
          <div className='Hobbies__sideBar'>
            
          </div>
          <div className='Hobbies__outlet'>
            <Outlet/>
          </div>
        </section>
      </section>
    </div>
  );
};
