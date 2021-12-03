import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PokemonTile = (props) => {
  const [pokemon, setPokemon] = useState({})

  const fetchPokemonSprite = async () => {
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
    fetchPokemonSprite()
  }, [])

  const handleDelete = async (event) => {
    event.preventDefault()
      try{
        const response = await fetch(`/api/v1/pokemon/${props.id}`, {
          credentials: "same-origin",
          method: "DELETE",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
        })
        if (!response.ok) {
          throw(new Error(`${response.status}: ${response.statusText}`))
        }

        props.filterPokemonById(props.id)
        
      } catch(err) {
        console.error(err)
      }
  }

  let sprite
  if (pokemon.sprites) {
    sprite = pokemon.sprites.front_default
  }

  return(

    <div>
      <Link to={`/pokemon/${props.name}`}>
        <div>
          <img src={sprite}
          width="150"
          height="150"
          />
        </div>
      </Link>
      <button className='button' onClick={handleDelete}>Release?</button>
    </div>
  )
}

export default PokemonTile