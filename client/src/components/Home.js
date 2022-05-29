import React from 'react'
import { NavLink } from 'react-router-dom'
import '../static/css/app.css'
import Header from './Header'
import Footer from './footer'
import { category } from '../config/category'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      category: [],
      place: '',
    }
  }
  componentDidMount() {
    this.setState({ category: category })

    var input = document.getElementById('location')
    var options = {
      types: ['(cities)'],
      componentRestrictions: { country: 'pak' },
    }
    let autoComplete = new window.google.maps.places.Autocomplete(
      input,
      options
    )
    autoComplete.addListener('place_changed', () => {
      var place = autoComplete.getPlace().name

      const upper = this.capital(place)
      window.location = '/cities/' + upper
      console.log(upper)
    })
  }
  capital = (str) => {
    var splitStr = str.toLowerCase().split(' ')
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
    // Directly return the joined string
    return splitStr.join(' ')
  }

  render() {
    return (
      <div>
        <div id="container" className="container">
          <Header />
          <div id="content">
            <div id="form-bg">
              <div id="form-overlay">
                <div className="row">
                  <div className=" col-md-8 col-lg-8" id="iconform">
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      onKeyPress={this._handleKeyPress}
                      placeholder="All Kazakhstan"
                    />
                    <i className="fa fa-map-marker-alt"></i>
                  </div>

                  <div className="col-md-2  col-lg-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      id="search-btn"
                    >
                      <i className="fa fa-search"></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="slider"
              className="carousel slide container "
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={
                      'https://data.1freewallpapers.com/download/book-inscription-words-flower-white-minimalism-1920x1200.jpg'}
                    alt="First slide"
                    height="450"
                  />

                  <div class="carousel-caption d-none d-md-block">
                    <h2 style={{color: "black"}}>WELCOME TO OUR ONLINE BOOKSTORE!</h2>
                    
                  </div>
                </div>

                <div className="carousel-item ">
                  <img
                    className="d-block w-100"
                    src={
                      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/bd07bc42883613.57db00bcc7fe9.jpg'
                    }
                    alt="Second slide"
                    height="450"
                  />

                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{color: "black"}} >SECRET BOOK</h3>
                    <b style={{color: "black"}}>Special rubric created for you.</b>
                  </div>
                </div>

                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={
                      'https://www.mockupworldhq.com/wp-content/uploads/2019/04/Free-Book-Cover-Mockup.jpg'
                    }
                    alt="Third slide"
                    height="450"
                  />

                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{color: "black"}}>FREE BOOK</h3>
                    <b style={{color: "black"}}>Read for free or give a book a second life.</b>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#slider"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#slider"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div id="main-content" className="row">
              <div
                id="catagory"
                className="col-md-10 col-sm-10 col-xs-10 col-lg-10 container"
              >
                {this.state.category.map((item, i) => {
                  return (
                    <NavLink to={`/list/${item.cate}`} key={item.cate}>
                      {' '}
                      <div id="cate-item">
                        <img
                          src={item.ic}
                          alt={item.cate}
                          height="100"
                          width="100"
                        />
                        <p>{item.cate}</p>
                      </div>
                    </NavLink>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home