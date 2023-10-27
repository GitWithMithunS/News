import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar'
import News from './Component/News/News'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Single from './Component/Singlenews/Single'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <>
      <Navbar/>      
      
        <Routes>
          <Route exact path="/" element={<News key='all' pagesize={18} country='in' category=''/>}/>
          <Route exact path="/business" element={<News key='business' pagesize={18} country='in' category='business'/>}/>
          <Route exact path="/entertainment" element={<News key='' pagesize={18} country='in' category='entertainment'/>}/>
          <Route exact path="/general" element={<News key='entertainment' pagesize={18} country='in' category='general'/>}/>
          <Route exact path="/health" element={<News  key='health'pagesize={18} country='in' category='health'/>}/>
          <Route exact path="/science" element={<News key='science' pagesize={18} country='in' category='science'/>}/>
          <Route exact path="/technology" element={<News key='technology' pagesize={18} country='in' category='technology'/>}/>
          <Route exact path="/sports" element={<News key='sports' pagesize={18} country='in' category='sports'/>}/>
          <Route exact path="/single" element={<Single />}/>
        </Routes>

      </>
      </BrowserRouter>
    )
  }
}



