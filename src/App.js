import React, { Component } from 'react'
import News   from './Component/News/News'
import Home from './Component/Home/Home'
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Single from './Component/Singlenews/Single'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  newskey = '76c7670f33fc46139a8d8a424657369d'
  state = {
    progress : 5 ,
  }
  setprogress= (progress) => {
    this.setState({progress:progress})
    console.log('progress iss working')
  }
  render() {
    return (
      <BrowserRouter >
      <>
      
      <LoadingBar className='highorder'
        color='red'
        progress={this.state.progress}
        shadow= {true}
        height={2}
  
      />
        
        <Routes>
          <Route exact path="/" element={<Home setprogress={this.setprogress}  key='all' pagesize={100} country='in' category=''/>}/>
          <Route exact path="/business" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='business' pagesize={18} country='in' category='business'/>}/>
          <Route exact path="/entertainment" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='' pagesize={18} country='in' category='entertainment'/>}/>
          <Route exact path="/general" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='entertainment' pagesize={18} country='in' category='general'/>}/>
          <Route exact path="/health" element={<News setprogress={this.setprogress} newskey={this.newskey}   key='health'pagesize={18} country='in' category='health'/>}/>
          <Route exact path="/science" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='science' pagesize={18} country='in' category='science'/>}/>
          <Route exact path="/technology" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='technology' pagesize={18} country='in' category='technology'/>}/>
          <Route exact path="/sports" element={<News setprogress={this.setprogress} newskey={this.newskey}  key='sports' pagesize={18} country='in' category='sports'/>}/>
          <Route exact path="/single" element={<Single/>}/>
        </Routes>

      </>
      </BrowserRouter>
    )
  }
}



