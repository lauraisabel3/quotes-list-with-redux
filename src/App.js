import './index.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuotes } from './features/quotes/quotesSlice';
import AddQuoteForm from './features/quotes/AddQuoteForm';
import QuotesList from './features/quotes/QuotesList';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuotes())
  })
  return (
    <div className="main">
      <AddQuoteForm />
      <QuotesList />
    </div>
  );
}

export default App;
