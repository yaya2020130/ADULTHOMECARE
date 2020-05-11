import React from 'react';

function Secound({props}) {
  console.log(props)
  return (

    <>
       
  
       
       <div class="col s12 m6 l4">
      <div class="card">
         <h5> <span class="card-title">{props.firstname} {props.lastname}</span></h5>
        <div class="card-image">
          <img src={props.url || "https://previews.123rf.com/images/dtiberio/dtiberio1801/dtiberio180100202/93064324-stressed-old-person.jpg" }alt="ty"/>
         
         {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
       
        <div class="card-content">
          <p>email - {props.email}</p>
          <p>phone - {props.phone_number}</p>
        </div>
      </div>
    </div>
       </>

  );
}
export default Secound;