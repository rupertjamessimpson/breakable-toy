import React, { useState, useEffect } from 'react'
import logo from '/Users/rupertsimpson/challenges/breakable-toy/app/assets/images/logo.png';
import rupertspokemon from '/Users/rupertsimpson/challenges/breakable-toy/app/assets/images/rupertspokemon.png'

const HomePage = () => {

  return (
    <div className='home-container'>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='rupe'>
        <img src={rupertspokemon} 
        width="400"
        height="300"
        />
      </div>
    </div>
  )
}

export default HomePage