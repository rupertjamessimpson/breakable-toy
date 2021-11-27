import React, { useState, useEffect } from 'react'
import PokemonTile from './PokemonTile'
import PokemonForm from './PokemonForm'

const PokemonPage = () => {
  const [usersPokemon, setUsersPokemon] = useState([])

  if (document.getElementsByTagName("a")[2].textContent == "Sign In") {
    return (
      <div>
        Sign in to add some Pokemon!
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
      <div>
        <PokemonForm/>
      </div>
      <div>
        {newPokemonArray}
      </div>
    </div>
  )
}

export default PokemonPage