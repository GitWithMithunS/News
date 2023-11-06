import React, { Component } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        };
    }
    
    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
        localStorage.setItem('searchData' , JSON.stringify(this.state.searchTerm))
      };
    
      handleSearchSubmit = (event) => {
        event.preventDefault();
        // const { history } = this.props;
        // history.push(`/?searchTerm=${this.state.searchTerm}`);
        console.log('Search Term:', this.state.searchTerm);
    };
    
  render() {
    return (
        <>
        <div className="navcont">
            <nav className="navbar navbar-expand-lg bg-body-tertiary nav">
            <div className="container-fluid nav">
                <Link className="navbar-brand" to="/"><strong>NewsFlix</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active navpop" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/entertainment">Entertainment</Link></li> 
                    <li className="nav-item"><Link className="nav-link navpop" to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/technology">Technology</Link></li>
                    <li className="nav-item"><Link className="nav-link navpop" to="/sports">Sports</Link></li>
                </ul>
                <form className="d-flex" onSubmit={this.handleSearchSubmit} role="search">
                    <input className="form-control me-2" type="search" placeholder="search" aria-label="Search" onChange={this.handleSearchChange}/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </div>
        </>
    )
  }
}
