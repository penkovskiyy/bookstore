import React from 'react'
import '../static/css/app.css'
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <footer class="sticky-footer">
        <ul>
          <li> <a href="/">Instagram</a> <br></br> </li>
          <li> <a href="/">Facebook</a> <br></br> </li>
          <li> <a href="/">Twitter</a> <br></br> </li>
          <li> <a href="/">TikTok</a> <br></br> </li>
        </ul>

        <p>&copy; Copyright 2022 by BookStore</p>
      </footer>
    )
  }
}

export default Footer
