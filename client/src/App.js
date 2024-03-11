import './App.css';
import {Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Signup from './pages/Signup';
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import MyBlogsPage from "./pages/MyBlogsPage";
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import CreateBlogPage from "./pages/CreateBlogPage";
function App() {
  return (
    <div className="App relative min-h-screen flex flex-col">
      <Navbar/>
      <Routes>
        <Route path='login' Component={LoginPage}></Route>
        <Route path='signup' Component={Signup}></Route>
        <Route path='/' Component={HomePage}></Route>
        <Route path='myblogs' Component={MyBlogsPage}></Route>
        <Route path='create' Component={CreateBlogPage}></Route>
        <Route path='blog/:id' Component={BlogPage}></Route> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
