import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import WorldNews from './components/WorldNews/WorldNews';
import Analitycs from './components/Analitycs/Analitycs';

function App() {

  const activeLinkStyle = {
    fontSize: "18px"
  }

  return (
    <div className="App">
      <ul className="ulNav">
        
        <li><NavLink exact activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/">Home</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/About">About</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/posts">Posts</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/worldNews">Price</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/contacts">Contacts</NavLink></li>
        <li><NavLink activeClassName="activeLink" activeStyle = {activeLinkStyle} to="/analytics">Analytics</NavLink></li>
      </ul>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/posts" component={Posts} />
        <Route path="/worldNews" component={WorldNews} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/analytics" component={Analitycs} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
