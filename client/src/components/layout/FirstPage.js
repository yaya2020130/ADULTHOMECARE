import React from 'react';


 class FirstPage extends React.Component{
  render(){
    return(
    
    
    
    
<div class="login-page">
 <div className ="row">

    <div className='col s6'>
    <form class="register-form">
          <div>
            <input id="create-name" type="text" placeholder="name" />
          </div>
            <input id="create-password" type="password" placeholder="password" /><div/>
           
            <button id="create-acc">create</button>
            <p class="message">Already registered? <a href="#">Sign In</a></p>
        </form>

    </div>
    <div className='col s6'>
    <form class="login-form">
          <div>
            <input id="login-name" type="text" placeholder="username" />
           </div>
            <input id="login-password" type="password" placeholder="password" /><div/>
            <button id="login-acc">login</button>
          
            <p class="message">Not registered? <a href="#">Create an account</a></p>
        </form>

    </div>

 </div>



   
</div>)
  
  }
}
export default FirstPage;