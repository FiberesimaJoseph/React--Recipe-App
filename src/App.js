import React, {usedEffect, usedState} from "react"; 
import "./App.css";


const App = () => {
const App_ID = "7eaab3c5";
const App_KEY = "f0ea9c7f17d6cbfda2049ffb84546f34";
// const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=$App_ID}&app_key=${App_KEY}`;

const [conter, setConter] = usedState(0);


useEffect(() =>{
    console.log('Effect has been run');
});

    return(
        <div className="App">
           <form className="search-form">
                <input className="search-bar" type="text"/>
                <button  onClick={() => setConter(counter + 1)} className="search-button" type="submit">[conter]</button>
               </form>
            </div>
    );
}



export default App;