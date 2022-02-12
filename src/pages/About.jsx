import React from 'react';
//import ReactDOM from 'react-dom';
import '../css/About.css';

function About() {

    return (
        <div className="Aboutss" style={{backgroundColor:'#F2FCFF'}}>
          <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700"/>
            <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" rel="stylesheet"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
          </head>
          
     <section className="section-a">
      <div className="container" >
        
          <h3>ABOUT US</h3>
          <p style={{fontSize: "20px",color:'#D8123C'}}>
            Hey there, <br/>
            Welcome to CookStar.com. 
            <br/>
            <br/>
             Our aim through this website is to ease your everyday dilemma so as to what to make new out of daily monotonous routine so that 
             food does not taste boring to your family. We at CookStar knew that key towards healthy & good family relations is good and refreshing food. But problem was what to make out of ingredients available at home??
             <br/>
             <br/>
             Feeling stressed as what to make?? Well now as a solution we have brought to you delecacies and recipes from  across the globe. So explore the website and let us know your reviews and suggestions.
             <br/>
             <br/>
             Happy Cooking!!!!
        </p>
        </div>
    </section>

    <section className="team">
        <h2>OUR TEAM</h2>
           

    <div className="wrapper-grid">
    <div className="container">
<a target="_blank" href="https://www.linkedin.com/in/falak-hirani-a102591a1/">    <img className="profile-img"   src="https://media-exp1.licdn.com/dms/image/C4D03AQFnjA1i2d3rzA/profile-displayphoto-shrink_400_400/0/1622723328493?e=1640217600&v=beta&t=O_7D-qRJopcguOnTFgjtL2ASX3pIx9dJnyU0dNt9Kns"/>
<i class="fab fa-linkedin"></i></a>      <h3 className="name">Falak Hirani</h3>
      <p className="description">Student</p>
    </div>

    <div className="container">

    <a target="_blank" href="https://www.linkedin.com/in/niyatipanchal/">    <img className="profile-img"   src="https://media-exp1.licdn.com/dms/image/C5603AQEXcbotxM_Njw/profile-displayphoto-shrink_400_400/0/1619158238856?e=1640217600&v=beta&t=Zx2k6_osyKIFubhtHRHZXW0Yao9udA6aKnh9pfI92Jo"/>
<i class="fab fa-linkedin"></i></a>     <h3 className="name">Niyati Panchal</h3>
      <p className="description">Student</p>
    </div>

    <div className="container">

    <a target="_blank" href="https://www.linkedin.com/in/smit-soni-3213ba192/">    <img className="profile-img"   src="https://media-exp1.licdn.com/dms/image/C5603AQEjm3SCik0XbQ/profile-displayphoto-shrink_400_400/0/1606448325770?e=1640217600&v=beta&t=fJ75RglTS1P2LT8r4EQGWzwq3lCTQWBnRRNOAmBqGPU"/>
<i class="fab fa-linkedin"></i></a> 
    <h3 className="name">Smit Soni</h3>
      <p className="description">Student</p>
    </div>
    <div className="container">

    <a target="_blank" href="https://www.linkedin.com/in/jay-shah-09/">    <img className="profile-img"   src="https://media-exp1.licdn.com/dms/image/C4D03AQEHVTaN-qLAbw/profile-displayphoto-shrink_400_400/0/1602317014620?e=1640217600&v=beta&t=JnMQ3mayL1kY7ukp_tHkP178qpc6mCumoMlGQUMJVN0"/>
<i class="fab fa-linkedin"></i></a>   <h3 className="name">Jay Shah</h3>
      <p className="description">Student</p>
    </div>

 

   

    </div>
    </section>

   </div>
    )
}

export default About;