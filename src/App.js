import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Members from './components/Members';
import Profile from './components/Profile';
// import Bill from './components/Bill';
import Sports from './components/Sports';

function App() {
  return (
    // <div>
    //   <Login/>
    // </div>
   
      <div className="App">
         <Router>
          <Route exact path='/' component={Login}/>
          {/* <Route exact path='/login' component={Login}/> */}
          <Route exact path='/members' component={Members}/>
          <Route exact path='/profile' component={Profile}/>
          <Route exact path='/sports' component={Sports}/>

          {/* <Route exact path='/bill' component={Bill}/>
          <Route exact path='/sports' component={Sports}/> */}
          </Router>
    </div>
   
    
  );
}

export default App;
