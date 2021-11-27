import React, { useState, useEffect } from 'react'

const PokemonTile = (props) => {
  const [pokemon, setPokemon] = useState({})

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const pokemonObject = await response.json()
      setPokemon(pokemonObject)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  let sprite
  if (pokemon.sprites) {
    sprite = pokemon.sprites.front_default
  }

  return(
    <div>
      <img src={sprite}/>
    </div>
  )
}

export default PokemonTile