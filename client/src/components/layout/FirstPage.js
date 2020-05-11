import React from 'react';


class FirstPage extends React.Component{
  render(){
    return(
      <div className="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                
                
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Sign In</h1>
                
                
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot your password?</a>
                <button id="Log-In">Log In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>
                        To keep connected with us please login with your credentials
                    </p>
                    <button class="ghost" id="signIn">Log In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Welcome to Adult HomeCare!</h1>
                    <p>To create an account, sign up below!</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
    )
    
    
    
    
{/* <div class="login-page">
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



   
</div>) */}


    
  }
}
export default FirstPage;