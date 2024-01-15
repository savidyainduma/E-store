import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Category from './Components/Category';


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

  const handleCategoryClick = id => {
    fetch("http://localhost:3001/products?catId="+id)
    .then(response => response.json())
    .then(data =>{
      console.log(data);
      setResults(data)
    })
  }

  const renderCategories = () => {
    return results.map(c => 
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)}/>
      );
  };

  return (
    <>
      <header>My Store</header>

      <section>
        <nav>
          {results &&  renderCategories()}
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
