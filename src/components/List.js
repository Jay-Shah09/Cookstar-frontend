import React from "react";
import {Link} from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState, useContext } from "react";
import Carousel from 'react-elastic-carousel';
import Cards from './Cards';
// import '../css/FrontPage.css';
import axios from "axios";

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]

const List = ({ name,routes}) => {
  const [userData,setUserData] = useState([]);

  React.useEffect(()=>{
      async function fetches() {
      const result = await axios.get('http://localhost:3001/userRecipe');
      setUserData(result.data);
    }
    fetches();
  },[]);

  const carouselUserData = userData.slice(0,7);

  return (
    <div className="home-list-div">
      <h2>{name}</h2>
      <Carousel breakPoints={breakPoints}>
        {
          carouselUserData.map((item,i)=>{
            return(<Cards key={i} id={item._id} img={item.image} title={item.recipetitle} username={item.username} like={item.like}/>)
          })
        }
      </Carousel>
      {name === "User's Recipes" ? <Link to={routes}> <button className="home-search-btn explore">Explore</button></Link> : <p></p>}
    </div>
  );
};
export default List;
