import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { deleteQuote, fetchQuotes } from "./quotesSlice";
import { GrClose } from 'react-icons/gr'

const QuotesList = () => {
  const quotes = useSelector(state => state.quotes.quotes)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuotes())
  }, [])

  const allQuotes = quotes.map(el => (
    <div key={el.id} className="quote">
      <p>{el.content}</p>
      <button onClick={() => dispatch(deleteQuote(el.id))}><GrClose className="btn-del"/></button>
    </div>
  ))
  return (
    <div className="quotes-container">
      {
      quotes.length === 0 ?
      <h3>There isn't quotes yet</h3>:
      allQuotes
      }
    </div>
  )
}

export default QuotesList