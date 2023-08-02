import React from 'react';

import Intro from './components/intro';
import Members from './components/members';
import Research from './components/r&a';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Footer from './components/footer';

// extra content of blog 
import Blog from './components/blog';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';

import './app.scss';

const App = () => {
  return (
    <Routes>
      <Route index element={
        <div>

          <Intro />
          <Members />
          <Research />
          <Blogs />
          {/* <Blog /> */}
          <Contact />
          <Footer />

        </div>
      }/>

      <Route 
        path={'/register'}
        element={
          <>
            <Register />
          </>
            
        }
      / >

      <Route 
        path={'/login'}
        element={
          <Login />
        }
        / >

      <Route 
        path={'/blogs'}
        element={
            <Blog />
        }
        / >

      <Route 
        path={'/research'}
        element={
            <Research />
        }
        / >

      <Route 
        path={'/videos'}
        element={
            <div>This is video section</div>
        }
        / >

      <Route 
        path={'/contact'}
        element={
            <Contact />
        }
        / >
    </Routes>
  )
}

export default App;
