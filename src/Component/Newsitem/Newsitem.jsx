import React, { Component } from 'react'
import './Newsitem.css'
export default class Newsitem extends Component {

  render() {
    let {title,description,imgurl,newsurl} = this.props               //destructuring concept(javascript)
    return (
      <>
        <div className="card" style={{width: '20rem'}}>
          <img src={imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"><strong>{title}</strong></h5>        {/*  after destructuring title and description passing it as props here */}
              <p className="card-text">{description}...</p>
              {/* <div className="content">
                <span>{content}...</span>
              </div> */}
              <div className="button">
              <a href={newsurl} target='blank' className="btn btn-primary read ">Read More</a>
              </div>
            </div>
        </div>
      </>
    )
  }
}
