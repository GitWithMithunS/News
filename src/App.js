import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar'
import News from './Component/News/News'
import { BrowserRouter,Route,Routes } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <>
      <Navbar/>      
      
        <Routes>
          <Route path="/" ><News pagesize={18} country='in' category='entertainment'/></Route>
          <Route path="/business" ><News pagesize={18} country='in' category='business'/></Route> 
          <Route path="/entertainment" ><News pagesize={18} country='in' category='entertainment'/></Route>
          <Route path="/general" ><News pagesize={18} country='in' category='general'/></Route> 
          <Route path="/health " ><News pagesize={18} country='in' category='health'/></Route>
          <Route path="/science" ><News pagesize={18} country='in' category='science'/></Route> 
          <Route path="/technology " ><News pagesize={18} country='in' category='technology'/></Route>
          <Route path="/sports" ><News pagesize={18} country='in' category='sports'/></Route> 
        </Routes>

      </>s
      </BrowserRouter>
    )
  }
}



