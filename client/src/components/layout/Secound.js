import React from 'react';

function Secound(props) {
  console.log(props)
  return (

    <container>
       
  
       <div class="row">
       <div class="col s12 m6 l3">
      <div class="card">
        <div class="card-image">
          <img src="{props.url}"/>
         <h5> <span class="card-title">{props.name}</span></h5>
         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>
       </container>

  );
}
export default Secound;