import React, { Component } from 'react'
import './Newsitem.css'
import Single from '../Singlenews/Single'
import { Link } from 'react-router-dom'


export default class Newsitem extends Component {

  constructor(){
    super();
    this.state={
        readme : false
     }
  }

  componentDidMount() {
    window.globalVariable = [{
      newstitle:this.props.title,
    }]
    // console.log(window.globalVariable)
  }
  readmoreclicked = () => {
    let {title,description,imgurl,newsurl,author,cont} = this.props 
    this.state = [{
      newsurl : `${newsurl}`,
      newstitle : `${title}`,
      newsimg : `${imgurl}`,
      newsdec : `${description}`,
      newscontent : `${cont}`,
      author : `${author}`,
    }]
    const thisState = () => {   
      this.setState({data:this.state});  
         };
    
  }
  render() {
    let {title,description,imgurl,newsurl,author,cont} = this.props               //destructuring concept(javascript)
 
  
  
  
  
  return (
      <>
        {!this.state.readme &&
        <div className="card" style={{width: '20rem'}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><strong>{title}</strong></h5>        {/*  after destructuring title and description passing it as props here */}
              <p className="card-text">{description}...</p>
              {/* <div className="content">
                <span>{content}...</span>
              </div> */}
              <div className="button">
                <button onClick={this.state} className="btn btn-primary read ">
                <Link to='/single' target='blank' >Read More</Link></button>
              <Link to={newsurl} target='blank' className="btn btn-primary read ">{author}</Link>
              </div>
            </div>
        </div>
        }
  

      </>

    )
  }
}
