import React, { Component } from 'react'
import Newsitem from '../Newsitem/Newsitem'
import './Home.css'
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar';
import { Location} from 'react-router-dom';
export default class News extends Component {
//   static defaultProps = {
//     country : 'in',
//     pagesize : 18,
//     category : 'general'
//   }
//   static propTypes = {
//     country : PropTypes.string ,
//     pagesize : PropTypes.number , 
//     category : PropTypes.string,
//   }
  constructor(props){
    console.log('i am a construct')
      super(props);
    this.state={
      articles:[],
      loading: false,
      page:1,  
      topic:'general'
     }
     let searchtxtfromnavbar = JSON.parse(localStorage.getItem('searchData'))
     console.log(searchtxtfromnavbar)
     if(searchtxtfromnavbar){
        this.setState({
          topic:searchtxtfromnavbar
        })
      }
    } 
    async componentDidUpdate(prevProps, prevState) {
      if (this.state.topic !== prevState.topic) {
        let urlall = `https://newsapi.org/v2/everything?q=${this.state.topic}&apiKey=76c7670f33fc46139a8d8a424657369d&page=1&pagesize=${this.props.pagesize}`
        console.log(urlall)
        this.setState({loading:true})
    let data = await fetch(urlall);
    let parseddata = await data.json()
    this.setState({
      allarticles:parseddata.articles,
      totalarticles:parseddata.totalResults,
      loading:false,
    })
        // this.setState({loading:true})
        // fetch(urlall)
        //   .then(response => response.json())
        //   .then(data => {
        //     this.setState({
        //       allarticles: data.articles,
        //       totalarticles: data.totalResults,
        //       loading: false,
        //     });
        //   });
      }
     }
  async componentDidMount(){   
    let urlall = `https://newsapi.org/v2/everything?q=${this.state.topic}&apiKey=76c7670f33fc46139a8d8a424657369d&page=1&pagesize=${this.props.pagesize}`
    console.log(urlall)
    this.setState({loading:true})
    let data = await fetch(urlall);
    let parseddata = await data.json()
    this.setState({
      allarticles:parseddata.articles,
      totalarticles:parseddata.totalResults,
      loading:false,
    })
  }

  // handelprevclick = async () => {
  //   if (this.state.page > 1) {
  //   let urlall = `https://newsapi.org/v2/everything?q=general&apiKey=76c7670f33fc46139a8d8a424657369d&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
  //   this.setState({loading:true})
  //   let data = await fetch(urlall);
  //   let parseddata = await data.json()
  //   this.setState({
  //    page:this.state.page -1,
  //    allarticles:parseddata.articles,
  //    loading:false
  //   })
  // }}

  // handelnxtclick = async () => {
  //   if(!(this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize))){
  //   this.setState({loading:true})
  //   let urlall = `https://newsapi.org/v2/everything?q=general&apiKey=76c7670f33fc46139a8d8a424657369d&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
  //   let data = await fetch(urlall);
  //   let parseddata = await data.json()
  //   this.setState({
  //    page:this.state.page +1,
  //    allarticles:parseddata.articles,
  //    loading:false
  //   })
  // }
  // }

  render() {
    return (
      <>
      <Navbar/>
      <div className="news">
        <div className="newscontainer">
          <h1 className="newstitle"><strong>NewsFlix </strong> - <small className='newstitlesmall'>Your Daily Reel of Breaking Stories </small></h1>
          {this.state.loading && <Loading />}
          <div className="newswrap">
          {!this.state.loading && this.state.allarticles && this.state.allarticles.map((element)=>{
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
             <div className="homebtn">
              <button></button>
             </div>
          {/* <div className="container nxtprev">
          <button disabled={this.state.page<=1} type="button" className="btn btn-warning" onClick={this.handelprevclick}><strong>&larr; Previous</strong></button>
          <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalarticles/this.props.pagesize)} className="btn btn-warning" onClick={this.handelnxtclick}><strong>Next &rarr;</strong></button>
          </div> */}
        </div>
      </div>
      </>
    )
  }
}


