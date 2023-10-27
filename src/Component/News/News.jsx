import React, { Component } from 'react'
import Newsitem from '../Newsitem/Newsitem'
import './News.css'
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types'




export default class News extends Component {
  static defaultProps = {
    country : 'in',
    pagesize : 18,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string ,
    pagesize : PropTypes.number , 
    category : PropTypes.string,
  }
  constructor(){
    super();
    console.log('heelo this is a constructor')
    this.state={
      articles:[],
      loading: false,
      page:1,  
     }
  }

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
    if(this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize)){

    }
    else{
   
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
      <div className="news">
        <div className="newscontainer">
          <h1 className="newstitle"><strong>NewsFlix </strong>- Top Headlines</h1>
          {this.state.loading && <Loading />}
          <div className="newswrap">
          {!this.state.loading && this.state.articles.map((element)=>{
            // console.log(element)
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



