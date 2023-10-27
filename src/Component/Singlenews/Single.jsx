// import React, { Component } from 'react'
// import './Single.css'
// import News from '../News/News'
// import Newsitem from '../Newsitem/Newsitem'

// export default class Single extends Component {

//   handleonclickcallback = (datatopass) => {
//     console.log(datatopass)
//   }

//   // async componentDidMount(){
//     //   console.log('cdm')       //note: componentdidmount function always runs after render() is executed.    
//     //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=76c7670f33fc46139a8d8a424657369d&page=1&pagesize=${this.props.pagesize}`
//     //   this.setState({loading:true})
//     //   let data = await fetch(url);
//   //   let parseddata = await data.json()
//   //   console.log(parseddata)
//   //   this.setState({
//     //     articles:parseddata.articles,
//     //     totalarticles:parseddata.totalResults,
//     //     loading:false
//     //   })
//     // }
    
//     render() {
//       const {location} = this.props
//       const {  newsurl : {newsurl},
//       newstitle : {title},
//       newsimg : {imgurl},
//       newsdec : {description},
//       newscontent : {cont},
//       author : {author},} = this.props.location.state
      
//       return (
//         <>
//         let {title,description,imgurl,newsurl,author} = this.props  
//       <Newsitem onClickCallBack={this.handleonclickcallback}/>
//       {/* <div className="single">
//         <div className="singlenews">
//             <img src='https://ichef.bbci.co.uk/news/1024/branded_news/1809A/production/_131485489_gettyimages-1636801385-1.jpg' alt="" className="singlenewsimg" />
//             <div className="singlecontent">
//               <div className="singletitle">{title}</div>
             
//             </div>
//         </div>
//       </div> */}
//       </>
//     )
//   }
// }
import React from 'react'

export default function Single(props) {
  console.log(props.data)
  return (
    <div>{props.data}</div>
    
  )
}
