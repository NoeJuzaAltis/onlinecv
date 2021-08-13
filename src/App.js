import './App.css';
import Skills from './Skills';
import Home from './Home'
import { Route, Redirect } from 'react-router-dom';
import Intro from './Intro';
import AboutMe from './AboutMe'
import Langs from './Langs';
import Experiences from './Experiences';
import ContactMe from './ContactMe'

function App() {
  return (
    <div className="App">
      <span class="tip">Conseil: certains éléments sont interactifs (clic dessus)</span>
        <Redirect to="/home"/>
        <Route path="/home" component={Home} />
        <Route path="/skills" component={Skills} />
        <Route path="/intro" component={Intro} />
        <Route path="/langs" component={Langs} />      
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/experiences" component={Experiences}/>
        <Route path="/contactme" component={ContactMe}/>
    </div>
  );
}

export default App;
