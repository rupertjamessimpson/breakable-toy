import React, { useState, useEffect } from 'react'

const HomePage = () => {

  return (
    <div className='home-container'>
      <div className='logo'>
        <img src="https://pokemon-bucket-breakable-toy.s3.us-east-2.amazonaws.com/d634bc0c3be955e5792ab97f27702385.png"/>
      </div>
      <div className='rupe'>
      <img src="https://pokemon-bucket-breakable-toy.s3.us-east-2.amazonaws.com/rupertspokemon.png"
        width="400"
        height="300"
        />
      </div>
    </div>
  )
}

export default HomePage