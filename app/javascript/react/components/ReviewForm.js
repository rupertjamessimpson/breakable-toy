import { checkPropTypes } from "prop-types"
import React, { useState, useEffect } from "react"

const ReviewForm = (props) => {
  const [formData, setFormData] = useState({
    body: ""
  })
  
  const handleChange = (event) => {
    event.preventDefault()
    setFormData({...formData, 
      body: event.currentTarget.value})
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
        setFormData({
          body: ""
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
          <input type="submit" className="button" value="Add Comment" />
        </form>
      </div>
    </div>
  )
}

export default ReviewForm