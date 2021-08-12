import './App.css';
import Skills from './Skills';
import logo from './logo.svg';
import Home from './Home'
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import Intro from './Intro';
import AboutMe from './AboutMe'
import Par from './Par';
import Langs from './Langs';

function App() {
  return (
    <div className="App">
        <Redirect to="/home"/>
        <Route path="/home" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/intro" component={Intro} />
        <Route path="/langs" component={Langs} />      
        <Route path="/aboutme" component={AboutMe} />     
    </div>
  );
}

export default App;
