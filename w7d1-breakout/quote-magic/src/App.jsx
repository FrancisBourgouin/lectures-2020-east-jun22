import React from 'react';
import './App.css';
import QuoteForm from './components/QuoteForm'
import QuoteList from './components/QuoteList'

function App() {
  const quotes = {
    a: { author: "Spock", text: "Do or do not, there is no try" },
    b: { author: "Darth Vader", text: "The needs of the many outweights the need of the few" },
    c: { author: "Robert J. Oppenheimer", text: "I have become death, destroyer of worlds" },
    d: { author: "Groot", text: "I am groot" }
  }

  return (
    <div className="App">
      <h1>BEST QUOTES EVAR.</h1>
      <QuoteList quotes={Object.values(quotes)} />
      <QuoteForm />
    </div>
  );
}

export default App;
