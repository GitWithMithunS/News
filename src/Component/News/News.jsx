import React, { Component } from 'react'
import Newsitem from '../Newsitem/Newsitem'
import './News.css'
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';




export default class News extends Component {
  // static defaultProps = {
  //   country : 'in',
  //   pagesize : 18,
  //   category : 'general'
  // }
  // static propTypes = {
  //   country : PropTypes.string ,
  //   pagesize : PropTypes.number , 
  //   category : PropTypes.string,
  // }
  capitalizefn = (s) => {
    return s.charAt(0).toUpperCase() + s.substring(1) 
}
  constructor(props){
  
    super(props);
    console.log('heelo this is a constructor')
    this.state={
      articles:[],
      loading: false,
      page:1,  
     }
     document.title = `${this.capitalizefn(this.props.category)}-NewsFlix `
    }
    
//   async updatenews() {
//     console.log('cdm')       //note: componentdidmount function always runs after render() is executed.    
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c7670f33fc46139a8d8a424657369d&page=${this.state.page} &pagesize=${this.props.pagesize}`
//     this.setState({loading:true})
//     let data = await fetch(url);
//     let parseddata = await data.json()
//     console.log(parseddata)
//     this.setState({
//       articles:parseddata.articles,
//       totalarticles:parseddata.totalResults,
//       loading:false
//     })
//   }

//   handelprevclick = async () =>{
//     if (this.state.page > 1) {
//     this.setState({
//       page : this.state.page -1
//     })
//     this.updatenews()
//   }}
//   handelnxtclick = async () =>{
//     if(!(this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize))){
//     this.setState({
//       page : this.state.page +1
//     })
//     this.updatenews()
//   }
// }


  async componentDidMount(){
    console.log('cdm')       //note: componentdidmount function always runs after render() is executed.    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c7670f33fc46139a8d8a424657369d&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({
      articles:parseddata.articles,
      totalarticles:parseddata.totalResults,
      loading:false
    })
  }

  handelprevclick = async () => {
    if (this.state.page > 1) {
    let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c7670f33fc46139a8d8a424657369d&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({
     page:this.state.page -1,
     articles:parseddata.articles,
     loading:false
    })
  }}

  handelnxtclick = async () => {
    if(!(this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize))){
       let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c7670f33fc46139a8d8a424657369d&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json()
    console.log(parseddata)
    this.setState({
     page:this.state.page +1,
     articles:parseddata.articles,
     loading:false
    })
  }
  }

  render() {
    return (
      <>
      <Navbar/>
      <div className="news">
        <div className="newscontainer">
          <h1 className="newstitle"><p className='newsflixtitle'><strong >NewsFlix </strong></p>- Top Headlines from {this.capitalizefn(this.props.category)}</h1>
          {this.state.loading && <Loading />}
          <div className="newswrap">
          {!this.state.loading && this.state.articles.map((element)=>{                                          
            // console.log(element) it will have all the values or objects present in the this.state.article
            return <div className="newsitemcontainer">
              <Newsitem title={element.title?element.title.slice(0):'Title is not mentioned by the Publisher'} 
                        description={element.description?element.description:'Their is no description provided by the news channel or author'} 
                        imgurl={element.urlToImage?element.urlToImage:'https://ichef.bbci.co.uk/news/1024/branded_news/1809A/production/_131485489_gettyimages-1636801385-1.jpg'}  
                        newsurl={element.url}
                        channel={element.source.name}
                        author={element.author?element.author:'Unknown'}
                        date={element.publishedAt}
                        content= {element.content?element.content:'Their is no content provided by the publisher.For more infomation try visiting the main website from button given in our website Newsflix'}/>
            </div>
            })}
          </div>
      
        
          <div className="container nxtprev">
          <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handelprevclick}><strong>&larr; Previous</strong></button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize)} className="btn btn-warning" onClick={this.handelnxtclick}><strong>Next &rarr;</strong></button>
          </div>
        </div>
      </div>
      </>
    )
  }
}



