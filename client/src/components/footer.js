import React from 'react'
import logo from '../assests/logo.jpg'
import '../static/css/app.css'
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div id="footer" className="container-fluid">
        <div id="footer-detail">
          <img src={logo} alt="Logo" id="flogo" height="60" width="60" />
          <small>&copy; Copyright 2022, BookStore</small>
          <div style={{ float: 'right' }}>
            <p>We are on social media</p>
            <a href="">Instagram</a> <br></br>
            <a href="">Facebook</a> <br></br>
            <a href="">TikTok</a> <br></br>
            <a href="">Twitter</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
