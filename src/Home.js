import './App.css';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

function Home() {
    return (
      <div className="logoContainer">
          <Link to="/intro"> <img src={logo} className="App-logo" alt="logo"/></Link>
      </div>
    );
  }


export default Home;