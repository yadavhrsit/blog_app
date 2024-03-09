import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './LoginPage';
import Signup from './Signup';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import MyBlogsPage from './MyBlogsPage';
import Navbar from './Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='login' Component={LoginPage}></Route>
        <Route path='signup' Component={Signup}></Route>
        <Route path='/' Component={HomePage}></Route>
        <Route path='myblogs' Component={MyBlogsPage}></Route>
        <Route path='blog/:id' Component={BlogPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
