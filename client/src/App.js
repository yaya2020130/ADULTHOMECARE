import React from 'react';
// import Wrapper from './components/layout/Wrapper'
// import { Switch,BrowserRouter, Route,Router } from "react-router-dom";
import './App.css';
import FirstPage from './components/layout/FirstPage';
import Navbar from './components/layout/Navbar';
// import Patient from './components/layout/Patient';
import Secound from './components/layout/Secound';
import DetailPage from './components/layout/DetailPage';
import API from './utils/API';
import Footer from "./components/Footer";
import RecordPage from './components/layout/RecordPage';




class  App extends React.Component{
  state  ={data:[]}
 
  componentDidMount(){
    API.getAllPatients().then(({data})=>this.setState({data}))
  }

 render(){
    return (
   <>
     <div >
       <Navbar/>
      <FirstPage/>
       
       <DetailPage/>
       
       <h1 style={{textAlign: "center"}}>HELLO WORLD</h1>
     </div>
     <div className='row container'> 
     {this.state.data.map(a=> <Secound props={a}/>)}
     </div>
       <Footer />

     {/* <Switch> */}

     {/* <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={FirstPage} />
          <Route exact path="/SecounPage" component={Secound} />
          {/* <Route exact path="/Logbook" component={Logbook} /> */}
          {/* <Route exact path="/Patient" component={Patient} />
        </Wrapper>
        <Footer />
      </div>
    </Router>

     </Switch> */} 
   </>
 );
 }



 }



 export default App;