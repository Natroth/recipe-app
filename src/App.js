import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';
import knifes from './assets/images/knifes2.png';
import Description from './Description'

const App = () => {
  const APP_ID = 'dc602f02';
  const APP_KEY = '51c587f84e9aa5232a1414458b608a0a';

  //need to use enviorment tools to protect ID and KEY
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  const example = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;


  useEffect( ()=>{
      getRecipes();
  }, [query])

  const getRecipes = async () => {
   const response = await fetch(example)
   const data = await response.json();
   console.log(data.hits);
   setRecipes(data.hits);
   setSearch('')
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
  }

  return(
    <div className="App" >
        <div className="header">
          <img src={knifes} className="logo-img" />
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" placeholder="What's Cookin?" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">
            Search</button>
          </form>
        </div>

      <Description thisValue={query} />

      <div className="recipes-wrapper">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label}         
          source={recipe.recipe.source} 
          image={recipe.recipe.image}
          url={recipe.recipe.url}
          ingredients = {recipe.recipe.ingredientLines}
          />
        ))}
      </div>
      <footer className="footer">
        <p>Nathan Roth</p>
        <p>Lynxic</p>
      </footer>
    </div>
  );
}

export default App;
