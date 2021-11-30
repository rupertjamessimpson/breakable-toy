import React, { useState, useEffect } from 'react'
import PokemonForm from './PokemonForm'
import ReviewTile from './ReviewTile'
import { Chart } from 'react-google-charts'

const PokemonShow = (props) => {

  const [reviews, setReviews] = useState([])

  const [pokemon, setPokemon] = useState({})

  const species = props.match.params.name

  const fetchPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${species}`)
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

  const fetchReviews = async () => {
    try {
      const response = await fetch(`/api/v1/reviews`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const reviewsArray = await response.json()

      setReviews(reviewsArray)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchPokemon()
  }, [])

  useEffect(() => {
    fetchReviews()
  }, [])

  let sprite
  if (pokemon.sprites) {
    sprite = pokemon.sprites.front_default
  }

  let types = []
  if (pokemon.types) {
    pokemon.types.forEach(type =>
      types.push(`${type.type.name} `))
  }

  let abilities = []
  if (pokemon.abilities) {
    pokemon.abilities.forEach(ability =>
      abilities.push(`${ability.ability.name} `))
  }

  let stats = []
  if (pokemon.stats) {
    pokemon.stats.forEach(stat =>
      stats.push(`${stat.base_stat} `))
  }

  let reviewsArray = reviews.map((review) => {
    if (review.species == species) {
     return(
      <ReviewTile key={review.id} review={review} />
     ) 
    }
  })

  return (
    <div>
      {pokemon.name}
      <div>
        <img src={sprite}/>
      </div>
      <div>
      <h3>Type:</h3>
        {types}
      </div>
      <div>
      <h3>Abilities:</h3>
        {abilities}
      </div>
      <div>
      <h3>Stats:</h3>
      </div>     

      <Chart
  width={'500px'}
  height={'300px'}
  chartType="BarChart"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Element',
      'Base Stat',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ],
    ['HP', parseInt(stats[0]), 'light-green', parseInt(stats[0])],
    ['Attack', parseInt(stats[1]), 'silver', parseInt(stats[1])],
    ['Defense', parseInt(stats[2]), 'gold', parseInt(stats[2])],
    ['Sp. Attack', parseInt(stats[3]), 'color: #e5e4e2', parseInt(stats[3])],
    ['Sp. Defense', parseInt(stats[4]), 'color: #e5e4e2', parseInt(stats[4])],
    ['Speed', stats[5], 'color: #e5e4e2', parseInt(stats[5])]
  ]}
  options={{
    title: 'Base Stats',
    width: 400,
    height: 280,
    bar: { groupWidth: '95%' },
    legend: { position: 'none' },
  }}
  // For tests
  rootProps={{ 'data-testid': '6' }}
/>

      <div>
      <h3>Discussion:</h3>
        {reviewsArray}
      </div>
    </div>
  )
}

export default PokemonShow