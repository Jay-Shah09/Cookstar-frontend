import React,{useEffect} from "react";
import List from "./List";
import axios from 'axios'
import {Link} from 'react-router-dom';
import "../css/FrontPage.css";
import Footer from "./Footer";
import bannerImg from '../Images/main-banner1.jpg';

const Home = () => {
  // CHECKING BACKEND CONNECTION
//   useEffect(()=>{
//    async function ef() {   let aa=  await axios.get('http://localhost:3001/');
//    console.log(aa.data);}
//  ef();
//   },[]);
  
  return (
      <>
    <div className="whole-page">
      <div className="home-info">
        <section className="home-intro-container">
          <h1>Cook Your meal with Cook<span class="star">Star</span></h1>
          <p className="intro-para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error,
            consequatur veritatis veniam velit voluptas tempore at aliquid
            ducimus optio ab magni, neque, quos officiis dolore perspiciatis
            maiores amet esse alias! Incidunt magni non corrupti sit at adipisci
            suscipit voluptas distinctio!
          </p>

        <Link to="/search" className="home-search-btn" >Search Recipe</Link>
        </section>
        <section className="home-image-container">
          <img src={bannerImg} alt="banner"/>
        </section>
      </div>
      <div>
        <br></br>
        <br></br>
        <List name="User's Recipes" routes="/users"/>

        {/* <div className="home-list-div">
          <h2>Seasonal Recipes</h2>
        </div> */}
        {/* <List name="Recent Recipes" /> */}

        <List name="Favourite Recipes" />
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Home;
