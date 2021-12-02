import React, { useState, useEffect } from 'react'
import PokemonTile from './PokemonTile'
import PokemonForm from './PokemonForm'

const PokemonPage = () => {
  const [usersPokemon, setUsersPokemon] = useState([])

  if (document.getElementsByTagName("a")[3].textContent == "Sign In") {
    return (
      <div className="sign-in">
        <h1 className='sign-in-text'>Sign in to add some Pokemon!</h1>
      </div>
    )
  }

  const fetchUsersPokemon = async () => {
    try {
      const response = await fetch("/api/v1/pokemon")
      if(!response.ok) {
        const errorMessage = `${response.status}: ${response.statusText}`
        const error = new Error(errorMessage)
        throw(error)
      }

      const fetchedPokemon = await response.json()
      setUsersPokemon(fetchedPokemon)

    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchUsersPokemon()
  }, [])

  const newPokemonArray = usersPokemon.map((pokemon) => {
    return (
      <PokemonTile
        key={pokemon.id}  
        name={pokemon.name}
      />
    )
  })

  return (
    <div>
      <div className='center'>
        <PokemonForm className='center'/>
      </div>
      <div className='pokemon-container'>
        {newPokemonArray}
      </div>
    </div>
  )
}

export default PokemonPage