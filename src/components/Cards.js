import React,{useContext,useState} from "react";
import {Link} from 'react-router-dom'
import { AppContext } from "../context";
import {FaRegHeart} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa';
import {FaRegBookmark} from 'react-icons/fa';
import {Button} from "@mui/material";
import axios from "axios";

const Cards = (props) => {
    const {bookmarkHandler, fillBookmark, bookmark_btn} = useContext(AppContext);
    const [value,setValue] = useState(0);

    const m=localStorage.getItem("email");
    const x = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `Bearer ${x}` }
      };
      React.useEffect(()=>{

      },[value]);
      const saved = async()=>{
        const response = await fetch('http://localhost:3001/recipeData/getSaved');
        const savedRecipes = await response.json();
      }
      React.useEffect(()=>{
        saved();
      })
    return (
        <div className="main-card home-cards">
          <div className="card-side">
          <h1 style={{textAlign: 'center'}}> <span style={{fontFamily: 'Ephesis'}}>By ~{props.username}</span> </h1>
              <div className="img-container">
                  <img src={props.img} alt="food image"/>
              </div>
              <div className="card-info-container">
                  <div className="card-info">
                      <h3>{props.title}</h3>
                      {props.like.includes(m) ? <Button style={{margin:'4px 4px'}} > <i style={{color: 'red',fontSize: '24px'}} onClick={(property)=>{ if (property.target.style.color == "red" || props.like.includes(m)) {
        property.target.style.color="black";
        axios.put("http://localhost:3001/recipeData/dislike",{email:m,id:props.id} ,config)
        .then((res) => {
         
            setValue(value + 1);
        })
        .catch((err) => {
          alert("Unauthorized!! Login! First"+err);
          property.target.style.color="black";
          // history.push("/login");
        });
    }
    else {
      console.log("ss"+props.like.includes(m));
        property.target.style.color = "red";

        axios.put("http://localhost:3001/recipeData/like",{email:m,id:props.id} ,config)
        .then((res) => {
            setValue(value + 1);
            
        })
        .catch((err) => {
          
            
          alert("Unauthorized!! Login  First"+err);
          property.target.style.color="black";
           //history.push("/login");
        });
    }}} class="fas fa-heart fa-white"></i>  <h3 style={{marginTop:'4px'}}>{props.like.length}</h3></Button>
  : <Button style={{margin:'4px 4px'}} > <i style={{color: 'black',fontSize: '24px'}} onClick={(property)=>{ if (property.target.style.color == "red" || props.like.includes(m)) {
        property.target.style.color="black";
        axios.put("http://localhost:3001/recipeData/dislike",{email:m,id:props.id} ,config)
        .then((res) => {
            setValue(value + 1);
         
        })
        .catch((err) => {
          
            
          alert("Unauthorized!! Login! First"+err);
          property.target.style.color="black";
           //history.push("/login");
        });
    }
    else {
      console.log("ss"+props.like.includes(m));
        property.target.style.color = "red";

        axios.put("http://localhost:3001/recipeData/like",{email:m,id:props.id} ,config)
        .then((res) => {
            setValue(value + 1);
         
        })
        .catch((err) => {
          
            
          alert("Unauthorized!! Login--First"+err);
          property.target.style.color="black";
          // history.push("/login");
        });
    }}} class="fas fa-heart fa-white"></i><h3 style={{marginTop:'4px'}}>{props.like.length}</h3></Button>
     }
                      {/* <button className="fav-btn"><FaRegHeart/></button> */}
                      {/* <button className="bookmark-btn"><FaRegBookmark/></button> */}
                      {/* <button className={fillBookmark ? "bookmark-btn bookmarkfill bookmarkfill-hide" : "bookmark-btn bookmarkfill"} ref={bookmark_btn} onClick={()=>bookmarkHandler(props._id,bookmark_btn)}><FaBookmark/></button> */}
                      {/* <button className="bookmark-btn bookmarkfill bookmarkfill-hide" ref={bookmark_btn} onClick={()=>bookmarkHandler(props.id,bookmark_btn)}><FaBookmark/></button> */}
                  <Link to={`/users/${props.id}`} className="recipe-btn">View More</Link>

                  </div>
              </div>
          </div>
          
            {/* <div className="card-side back-side">
                <button className="add-to-fav" onClick={()=>counterFunc(props.title,fav_btn)}>{btnName}</button>
            </div> */}
        </div>      
  );
};

export default Cards;
