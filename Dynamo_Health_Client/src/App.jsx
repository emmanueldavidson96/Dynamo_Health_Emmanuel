import { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Faqs from './Pages/Faqs';
import ContactUs from './Components/ContactUs';
import PostBlog from './Pages/PostBlog';
import EditBlog from './Pages/EditPost';
import BlogContent from './Pages/BlogContent';
import Register from './Pages/Register';
import Login from './Pages/Login';
import { UserContextProvider } from './ContextApi/AuthContext';
import Dashboard from './Pages/Dashboard';
import CreateANewBlog from './Pages/CreateANewBlog';
import UpdateThisBlog from './Pages/UpdateThisBlog';

function App() {

  return (

    <UserContextProvider>
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>} />
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/faqs" element={<Faqs/>}/>
            <Route path="/contact" element={<ContactUs/>}/>
            <Route path="/postcontent" element={<PostBlog/>}/>
            <Route path="/editcontent" element={<EditBlog/>}/>
            <Route path="/blogcontent/:id" element={<BlogContent/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/admindashboard" element={<Dashboard/>}/>
            <Route path="/createnewblogpost" element={<CreateANewBlog/>} />
            <Route path="/updateThisBlogInfo/:id" element={<UpdateThisBlog/>}/>
          </Routes>
        </div>
      </Router>
    </UserContextProvider>    
  )
}

export default App
