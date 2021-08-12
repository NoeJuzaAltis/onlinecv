import './App.css';
import Skills from './Skills';
import logo from './logo.svg';
import Home from './Home'
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import Intro from './Intro';
import Par from './Par';

function App() {
  return (
    <div className="App">
        <Redirect to="/home"/>
        <Route path="/home" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/intro" component={Intro} />
        <Route path="/par" component={Par} />      
    </div>
  );
}

export default App;
