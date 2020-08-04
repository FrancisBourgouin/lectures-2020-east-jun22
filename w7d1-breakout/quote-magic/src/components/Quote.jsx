import React from 'react'

const Quote = (props) => {
  const { text, author } = props

  return <li>{text}, by famous person {author}</li>
}

export default Quote