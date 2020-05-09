import React from 'react';

import './App.css';
// import FirstPage from './components/layout/FirstPage';
import Navbar from './components/layout/Navbar';
import Patient from './components/layout/Patient';
import Secound from './components/layout/Secound';
import DetailPage from './components/layout/DetailPage';






class  App extends React.Component{
  state  ={data:[]}
 
  componentDidMount(){
    this.setState({data:[{
 
     name:"Roger Moore",
     url:"https://i1.wp.com/www.nationalreview.com/wp-content/uploads/2017/05/roger-moore-best-james-bond-rip-1.jpg?fit=788%2C460&ssl=1"
   },
   {
     name:"Daniel Craig",
     url:"https://www.bakadesuyo.com/wp-content/uploads/2013/05/James-Bond.jpg"
   },
  
   {
     name:"Jackie Chan",
     url:"https://i.ytimg.com/vi/nc-NIveaM3U/maxresdefault.jpg"
   },{
     name:"Brad Pitt",
     url:"https://media1.popsugar-assets.com/files/thumbor/4UYUg9UKWqqhaFfElFDU9bKMRgQ/356x1145:1857x2646/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/970/n/1922398/cc3fa7b15d70381d55bd82.88203803_/i/Brad-Pitt.jpg"
   
 
 }]})


  }



 
  


 render(){
   console.log(this.state)
    return (
   <>
     <div >
       <Navbar/>
       <DetailPage/>
       <h1>HELLO WORLD</h1>
     </div>
     <div className='card-img-top'> 
     {this.state.data.map(a=> <Secound props={a}/>)}
     </div>
   </>
 );
 }



 }



 export default App;