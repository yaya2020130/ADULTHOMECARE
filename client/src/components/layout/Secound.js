import React from 'react'

 function Secound(props) {
   console.log(props)
  return (
        
 

<container>
<div class="row">
    <div class="col s12"> ADULT HOME CARE<p>s12</p></div>
    <div class="col s12 m4 l2"><p>s12 m4</p></div>
    <div class="col s12 m4 l8"><p>s12 m4</p></div>
    <div class="col s12 m4 l2"><p>s12 m4</p></div>
  </div>
  <div class="row">
    <div class="col s12 m6 l3"> <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <img src={props.url} className="card-img-top" alt="..." style={{maxHeight:"20vh", width:"100%"}}/>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>  <p>{props.name}</p></div>
    <div class="col s12 m6 l3">  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <img src={props.url} className="card-img-top" alt="..." style={{maxHeight:"20vh", width:"100%"}}/>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div><p>{props.name}</p></div>
    <div class="col s12 m6 l3"> <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <img src={props.url} className="card-img-top" alt="..." style={{maxHeight:"20vh", width:"100%"}}/>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div><p>{props.name}</p></div>
    <div class="col s12 m6 l3"><div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <img src={props.url} className="card-img-top" alt="..." style={{maxHeight:"20vh", width:"100%"}}/>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div><p>{props.name}</p></div>
  </div>
  </container>

  )  
}
export default Secound;