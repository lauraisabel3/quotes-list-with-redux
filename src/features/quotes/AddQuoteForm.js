import { useState } from "react"
import { useDispatch } from "react-redux"
import { addQuote } from "./quotesSlice"
import './quotesStyles.scss'

const AddQuoteForm = () => {
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onAddQuote = () => {
    if((content.length > 0) && (!content.trim() === "")) {
      dispatch(addQuote(content))
      setContent('')
    }
    
  }

  
  return (
    <div className="form-container">
      <label>Add your positive quote, maybe you will need it tomorrow</label>
      <input
        placeholder="Inspire yourself and somebody else"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <button onClick={onAddQuote}>Add your quote</button>
    </div>
  )
}

export default AddQuoteForm