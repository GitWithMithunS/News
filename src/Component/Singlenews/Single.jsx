import React from 'react'
import './Single.css'
import { loremIpsum } from 'lorem-ipsum';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function Single() {
  const data = JSON.parse(localStorage.getItem('newsData'))
  console.log(data)
  // const lorem = loremIpsum({             
  //   count: 3, // Number of "words", "sentences", or "paragraphs"
  //   units: 'paragraphs', // Generate "paragraphs" of Lorem Ipsum text
  //   format: 'html', // Return the generated text as HTML
  // });
  const loremContent = loremIpsum({
    count: 8,
    units: 'paragraphs',
    sentenceLowerBound: 10,
    sentenceUpperBound: 15,
    paragraphLowerBound: 5,
    paragraphUpperBound: 9,
  });
  return (
      <>
        <Navbar/>
        {data && (<div className="singlecontainer">
          <div className="singlewrap">
          <h1 className="newstitle"><strong>NewsFlix </strong>- Top Headlines</h1>
          <h1 className="singletitle">{data.newstitle}</h1>
          <div className="singleimg">
            <img src={data.newsimg} alt="" className="singleimgitem" />
          </div>
          <div className="singletxtcontainer">
            <div className="datetxt">
              <span className="datetxt">By {data.author} on {new Date(data.date).toDateString()}-{new Date(data.date).toTimeString().slice(0,12)}</span>
            </div>
            <div className="singledesc">
            <span className="singledesctxt">{data.newsdec}</span>
            </div>
            <div className="singlecont">
                <span className="singleconttxt">{data.newscontent}
                                          <code>The NEWS API is allowing me to fetch only this much 
                                            text from the article.so its a limitation.
                                            To read more content about the news just click on the button beside 
                                            read more or the button given at the end in this page
                                             which will redirect you to the main website were
                                            the news is published.
                                            </code>{loremContent}</span>

          </div>
              <div className='singlevisitweb'>
              <span><strong>Visit this website for <code>Detailed</code> infomation</strong>  </span>
              <div className="singlewebsitebtn">
                <Link to={data.newsurl} target='blank' className="btn btn-warning read ">{data.channel}</Link>
              </div>
              </div>
            </div>
          {/* <button className="btn btn-warning backhome">
            Back
          </button> */}
          </div>
        </div>)}

      </>
    )
}



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