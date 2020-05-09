import React from 'react';

import './App.css';
// import FirstPage from './components/layout/FirstPage';
import Navbar from './components/layout/Navbar';
import Patient from './components/layout/Patient';
import Secound from './components/layout/Secound';
import DetailPage from './components/layout/DetailPage';
import API from './utils/API'






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
       <DetailPage/>
       <h1 style={{textAlign: "center"}}>HELLO WORLD</h1>
     </div>
     <div className='row container'> 
     {this.state.data.map(a=> <Secound props={a}/>)}
     </div>
   </>
 );
 }



 }



 export default App;