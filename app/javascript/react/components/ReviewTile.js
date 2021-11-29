import React from 'react'

const ReviewTile = (props) => {
  return(
    <p>{props.review.user_id}: {props.review.body}</p>
  )
}

export default ReviewTile