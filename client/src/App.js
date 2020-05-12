import React from 'react';
import Wrapper from './components/layout/Wrapper'
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import FirstPage from './components/layout/FirstPage';
import Navbar from './components/layout/Navbar';
import Patient from './components/layout/Patient';
import API from './utils/API';
import Footer from "./components/Footer";




class App extends React.Component {
  state = { data: [] }

  componentDidMount() {
    API.getAllPatients().then(({ data }) => {
      this.setState({ data })
      console.log(data)
    })
  }

  render() {
    return (
      <Router>
          <Navbar />
          <Route exact path="/" component={FirstPage} />
          {/* <Route exact path="/Logbook" component={Logbook} /> */}
          <Route exact path="/patient" component={() => <Patient data={this.state.data} />} />
          <Footer />
      </Router>
    );
  }

}



export default App;