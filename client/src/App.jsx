import React from 'react'
import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import Home from './components/Home'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Campgrounds from './components/Campgrounds'
import ErrorPage from './components/ErrorPage'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <nav>
          <h1>
            <Link to="/">Book It</Link>
          </h1>
          <ul>
            <li>
              <Link to="/campground">Campgrounds</Link>
            </li>
            {/* <li>
              <Link to="/campground">Campgrounds</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/campground' element={<Campgrounds />} />
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App