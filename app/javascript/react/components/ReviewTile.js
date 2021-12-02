import React from 'react'

const ReviewTile = (props) => {
  return(
    <div className='review-tile'>
      <p>{props.review.body}</p>
    </div>
  )
}

export default ReviewTile