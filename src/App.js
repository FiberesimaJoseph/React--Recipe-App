import React, {useEffect, useState} from "react"; 
import Recipes from './Recipes';
import "./App.css";

const App = () => {
const App_ID = "7eaab3c5";
const App_KEY = "f0ea9c7f17d6cbfda2049ffb84546f34";

    const [recipes, setRecipes] = useState([]);


useEffect( () => {
    getRecipes();
}, []);

    const getRecipes = async () => {
        const response = await fetch (`https://api.edamam.com/search?q=chicken&app_id=$App_ID&app_key=${App_KEY}`
        );
        const data =  await response.json();
         setRecipes(data.hits);
    }

    return(
        <div className="App">
           <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button" type="submit">search</button>
               </form>
               {recipes.map(recipe => (
                  <Recipes /> 
               ))};
            </div>
    );
}



export default App;