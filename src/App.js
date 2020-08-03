import React,{useState,useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Recipe from  "./Recipe"

function App(){

  const[recipe,setRecipe]= useState([])
  const[input,setInput]=useState("")
useEffect(() => {
  axios.get(`https://api.edamam.com/search?q=${input}&app_id=aef7bd95&app_key=a31e0e7a043d7e010589ce393ad45e59&from=0&to=5`)
  .then((response) => {
    console.log(response.data.hits);
    setRecipe(response.data.hits)
  });
  
}, [input])

  return (
    <div className="App">
      <div className="search">
      <h1 className="head">Recipe App</h1>
     <input 
     value={input}
     onChange={(e)=> setInput(e.target.value)}
     type="text"
     />
     </div>
     
     
     {recipe.map((r, i) => (
       
         <Recipe calories={r.url} name={r.recipe.label} image={r.recipe.image} ingredients={r.recipe.ingredients}/>
     
      
     ))}
      
    
    
     </div>
  );
}

export default App;
