import { checkPropTypes } from "prop-types"
import React, { useState, useEffect } from "react"

const ReviewForm = (props) => {


  const [formData, setFormData] = useState({
    species: props.species,
    body: ""
  })
  
  const handleChange = (event) => {
    event.preventDefault()
    setFormData({...formData, 
      body: event.currentTarget.value})
      console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
      try{
        const response = await fetch("/api/v1/reviews", {
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
        const createdReview = await response.json()
        props.updateReviews(createdReview)
        setFormData({
          species: props.species,
          body: ""
        })
      } catch(err) {
        console.error(err)
      }
  }


  return(
    <div className='form-container'>
      <div className='form'>

        <form onSubmit={handleSubmit}>
          <label htmlFor="pokemon">
          <input type="text" name="pokemon" id="pokemon" value={formData.body} onChange={handleChange}/>
          </label>

          <label htmlFor="species">
          <input type="hidden" name="species" id="species" value={formData.species}/>
          </label>

          <input type="submit" className="button" value="Add Comment" />

          
        </form>

      </div>
    </div>
  )
}

export default ReviewForm