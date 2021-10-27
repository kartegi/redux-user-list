import './App.sass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import UserList from './components/user-list/UserList';
import User from './components/user/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={UserList} />
          <Route path='/user/:login' component={User} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
