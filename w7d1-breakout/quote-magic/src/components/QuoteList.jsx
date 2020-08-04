import React from 'react'
import Quote from './Quote'

const QuoteList = (props) => {
  const { quotes } = props

  const parsedQuotes = quotes.map(quote => <Quote text={quote.text} author={quote.author} />)
  return (
    <>
      <h1>I AM QUOTELIST</h1>
      <ul>
        {parsedQuotes}
      </ul>
    </>
  )
}

export default QuoteList