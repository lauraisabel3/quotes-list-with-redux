import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

const items = localStorage.getItem('quotes') != null ? JSON.parse(localStorage.getItem('quotes')) : [];

let initialState = {
  quotes: items,
  fetchedQuotes: []
}
const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    addQuote: {
      reducer: (state,action) => {
        state.quotes.push(action.payload)
        localStorage.setItem('quotes', JSON.stringify(state.quotes.map(quote => quote)))

        console.log(JSON.parse(localStorage.quotes)[0])
        
      },
      prepare: (content) => {
        return{
          payload: {
            id: nanoid(),
            content
          }
        }
      }
    },
    deleteQuote: (state,action) => {
      let deletedQuote = state.quotes.find(quote => quote.id === action.payload);
      let indexDeletedQuote = state.quotes.indexOf(deletedQuote);
      state.quotes.splice(indexDeletedQuote, 1) 
      localStorage.setItem('quotes', JSON.stringify(state.quotes.map(quote => quote)))      
    }
  },
  extraReducers(builder) {
    builder
    .addCase(fetchQuotes.fulfilled,(state,action) => {
      state.fetchedQuotes.push(action.payload)
    })
  }
})

export const fetchQuotes = createAsyncThunk('quotes/fetchQuotes', async() => {
  const response = await fetch('https://type.fit/api/quotes');
  const data = await response.json()
  return data
})
 


export const {addQuote, deleteQuote} = quotesSlice.actions
export default quotesSlice.reducer