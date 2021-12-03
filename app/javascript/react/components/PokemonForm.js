import { checkPropTypes } from "prop-types"
import React, { useState, useEffect } from "react"

const PokemonForm = (props) => {
  const [formData, setFormData] = useState({
    name: ""
  })
  
  const handleChange = (event) => {
    event.preventDefault()
    setFormData({...formData, 
      name: event.currentTarget.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
      try{
        const response = await fetch("/api/v1/pokemon", {
          credentials: "same-origin",
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        if (!response.ok) {
          throw(new Error(`${response.status}: ${response.statusText}`))
        }
        const createdPokemon = await response.json()
        props.updatePokemon(createdPokemon)
        setFormData({
          name: ""
        })
      } catch(err) {
        console.error(err)
      }
  }

  return(
    <div className='form-container'>
      <div className='form'>
        <form onSubmit={handleSubmit} className='center'>
          <label htmlFor="pokemon"></label>
          <input type="text" name="pokemon" id="pokemon" value={formData.name} onChange={handleChange}/>
          <input type="submit" className="button" value="Add Pokemon" />
        </form>
      </div>
    </div>
  )
}

export default PokemonForm