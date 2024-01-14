import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [results, setResults] = useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/categories")
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setResults(data)
    })
  }, []) 

  return (
    <>
      <header>My Store</header>

      <section>
        <nav>
        {
        results.map(d => (
          <div key={d.id}>{d.title}</div>
        ))
      }
        </nav>
        <article>
          Main Area
        </article>
      </section>

      <footer>
        footer
      </footer>

      <div className="App">
      
    </div>
    </>
    
  );
}

export default App;
