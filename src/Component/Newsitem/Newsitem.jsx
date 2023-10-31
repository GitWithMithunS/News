import React, { Component } from 'react'
import './Newsitem.css'
import { Link } from 'react-router-dom'


export default class Newsitem extends Component {
  
  thisState = () => {   
      let {title,description,imgurl,newsurl,author,channel,content,date} = this.props
     
      const data = {newsurl : `${newsurl}`,
      newstitle : `${title}`,
      newsimg : `${imgurl}`,
      newsdec : `${description}`,
      newscontent : `${content}`,
      author:`${author}`,
      date : `${date}`,
      channel : `${channel}`,  
         };
         localStorage.setItem('newsData' , JSON.stringify(data))
        }
    
        
  render() {

    let {title,description,imgurl,newsurl,author,channel,date} = this.props               //destructuring concept(javascript)
 
  
  
  
  
  return (
      <>
    
        <div className="card" style={{width: '20rem'}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><strong>{title}</strong></h5>        {/*  after destructuring title and description passing it as props here */}
              <p className="card-text">{description.slice(0,95)}...</p>
              
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger morezindex">
              {channel}</span>

              <div className="endcomponents">
                <p className="card-text"><small className="text-body-secondary smalltxt">By {author} on {new Date(date).toDateString()}-{new Date(date).toTimeString().slice(0,12)} </small></p>
                <div className="button">
                  <button onClick={this.thisState} className="btn btn-primary read ">
                  <Link to='/single' target='blank' >Read More</Link></button>
                  <Link to={newsurl} target='blank' className="btn btn-primary read ">{channel}</Link>
                </div>
              </div>
            </div>
        </div>
      
    
      </>
    )
  }
}



      // componentDidMount() {
      //   window.globalVariable = [{
      //     newstitle:this.props.title,
      //   }]
      //   // console.log(window.globalVariable)
      // }
      // readmoreclicked = () => {
      //   let {title,description,imgurl,newsurl,author,cont} = this.props 
      //   this.state={data:""}
      
    
        // thisState = () => {   
        //   let {title,description,imgurl,newsurl,author,cont} = this.props
        //   this.setState(
        //     {data : {newsurl : `${newsurl}`,
        //   newstitle : `${title}`,
        //   newsimg : `${imgurl}`,
        //   newsdec : `${description}`,
        //   newscontent : `${cont}`,
        //   author : `${author}`,}});  
        //      };
        