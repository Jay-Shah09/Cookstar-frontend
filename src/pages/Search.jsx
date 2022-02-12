import React from 'react';
import { useState, useContext } from 'react';
import '../css/SearchPage.css'
import {AppContext} from '../context'
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';

function Search() {

    const {getRecipes, result} = useContext(AppContext);
    const [recipeName, setRecipeName] = useState("");
    const [dietF1,setDietF1] = useState(null);
    const [healthF2,setHealthF2] = useState(null);
    const api_ID='cdb2a86f';
    const api_KEY='18c123593182cf4fbc5230aa15e2c375';  
    var url;
    
    function sunbm(e){
        e.preventDefault();
        const diet = dietF1;
        const health = healthF2;
        const filter1 = "&diet=";
        const filter2 = "&health=";
       
        url =`https://api.edamam.com/search?q=${recipeName}&app_id=${api_ID}&app_key=${api_KEY}`;
        
        if (diet !== null) {
            url += filter1 + diet;
        }
        if (health !== null) {
            url += filter2 + health;
        }
        getRecipes(url);   
    }
    return (
        <div>
            <section className="search-section-container">
                <div className="searchbar-filter-section">
                    <SearchBar submits={(e)=>sunbm(e)}  meth={(e)=>setRecipeName(e.target.value)} name={recipeName}/>
                    <article className="filter-section">
                        <h2>Filter Your Recipes</h2>
                        <div className="filter-container">
                            <div className="filter1-dietInput">
                                <h3>Diet Options</h3>
                                <select id="dietInput" onChange={(e)=>setDietF1(e.target.value)}>
                                    <option value="none"></option>
                                    <option value="balanced">balanced</option>
                                    <option value="high-protein">high-protein</option>
                                    <option value="low-fat">low-fat</option>
                                    <option value="low-carb">low-carb</option>
                                </select>
                            </div>
                            <div className="filter2-healthInput">
                                <h3>Health Options</h3>
                                <select id="healthInput" onChange={(e)=>setHealthF2(e.target.value)}>
                                    <option value="none"></option>
                                    <option value="sugar-conscious">sugar-conscious</option>
                                    <option value="peanut-free">peanut-free</option>
                                    <option value="tree-nut-free">tree-nut-free</option>
                                    <option value="alcohol-free">alcohol-free</option>
                                    <option value="vegan">vegan</option>
                                    <option value="vegetarian">vegetarian</option>
                                </select>
                            </div>
                            <div className="filter3-healthInput">
                                <h3>Health Options</h3>
                                <select id="healthInput" onChange={(e)=>setHealthF2(e.target.value)}>
                                    <option value="none"></option>
                                    <option value="sugar-conscious">sugar-conscious</option>
                                    <option value="peanut-free">peanut-free</option>
                                    <option value="tree-nut-free">tree-nut-free</option>
                                    <option value="alcohol-free">alcohol-free</option>
                                    <option value="vegan">vegan</option>
                                    <option value="vegetarian">vegetarian</option>
                                </select>
                            </div>
                        </div>
                    </article>
                </div>
                
                <article className="cards-section">
                    {result.map((recipes,index)=>{
                        return ( 
                        <Card key={index} id={index} link={recipes.recipe.url} info={recipes.recipe.mealType} title={recipes.recipe.label} img={recipes.recipe.image} cuisineType={recipes.recipe.cuisineType}/>);
                    })}
                </article>
                
            </section>
        </div>
        
    )
}

export default Search;
