import React, { Component } from 'react'
import loading from './Walk.gif'
import './Loading.css'

export default class Loading extends Component {
  render() {
    return (
      <div className='lo'><img src={loading} alt="loading"/><img src={loading} alt="loading"/><img src={loading} alt="loading"/></div>
    )
  }
}
