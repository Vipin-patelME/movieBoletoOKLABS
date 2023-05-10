import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Movie2 from "../features/movie/Movie2";
import { useSelector } from "react-redux";
import Loader from "../components/ui/Loader";

const initialState ={
  movies:[
    {
      id:1,
      name:"Alone musk",
      movieUrl:"http://pixner.net/boleto/demo/assets/images/movie/movie01.jpg"
    },
    {
      id:2,
      name:"Michel Mars",
      movieUrl:"http://pixner.net/boleto/demo/assets/images/movie/movie02.jpg"
    },
    {
      id:3,
      name:"Lux Venus",
      movieUrl:"http://pixner.net/boleto/demo/assets/images/movie/movie03.jpg"
    }
  ]
} 



const Home = () => {

  const {t} = useTranslation()
  const {loading} = useSelector(state => state.movie)
  console.log("Loading--->", loading)

  return (
    <>
      <section className="banner-section">
        <div
          className="banner-bg bg_img bg-fixed"
          data-background="assets/images/banner/banner01.jpg"
        />
        <div className="container">
          <div className="banner-content">
            <h1 className="title  cd-headline clip">
            <span className="d-block">{t("Hey Vipin")}</span>
              <span className="d-block">{t("book your")}</span> {t("tickets")} for
              <span className="color-theme cd-words-wrapper p-0 m-0 ms-1">
                <b className="is-visible">Vipin's Class</b>
                <b>{t("Event")}</b>
                <b>{t("Sport")}</b>
                <b>{t("Movie")}</b>
              </span>
            </h1>
            <p>
              Safe, secure, reliable ticketing.Your ticket to live
              entertainment!
            </p>
          </div>
        </div>
      </section>
      <section className="search-ticket-section padding-top pt-lg-0">
        <div className="container">
          <div
            className="search-tab bg_img"
            data-background="assets/images/ticket/ticket-bg01.jpg"
          >
            <div className="row align-items-center mb--20">
              <div className="col-lg-6 mb-20">
                <div className="search-ticket-header">
                  <h6 className="category">welcome to Boleto </h6>
                  <h3 className="title">what are you looking for</h3>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <ul className="tab-menu ticket-tab-menu">
                  <li className="active">
                    <div className="tab-thumb">
                      <img
                        src="assets/images/ticket/ticket-tab01.png"
                        alt="ticket"
                      />
                    </div>
                    <span>movie</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="assets/images/ticket/ticket-tab02.png"
                        alt="ticket"
                      />
                    </div>
                    <span>events</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="assets/images/ticket/ticket-tab03.png"
                        alt="ticket"
                      />
                    </div>
                    <span>sports</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-area">
              <div className="tab-item active">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search for Movies" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">cinema</span>
                    <select className="select-bar">
                      <option value="Awaken">Awaken</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search for Events" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">event</span>
                    <select className="select-bar">
                      <option value="angular">angular</option>
                      <option value="startup">startup</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="Last-First">Last-First</option>
                      <option value="wish">wish</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Sports" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2020</option>
                      <option value="26-12-19">24/10/2020</option>
                      <option value="26-12-19">25/10/2020</option>
                      <option value="26-12-19">26/10/2020</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="assets/images/ticket/cinema.png" alt="ticket" />
                    </div>
                    <span className="type">sports</span>
                    <select className="select-bar">
                      <option value="football">football</option>
                      <option value="cricket">cricket</option>
                      <option value="cabadi">cabadi</option>
                      <option value="madrid">madrid</option>
                      <option value="gadon">gadon</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="movie-section padding-top padding-bottom bg-two">
        <div className="container">
          <div className="row flex-wrap-reverse justify-content-center">
            <div className="col-lg-3 col-sm-10  mt-50 mt-lg-0">
              <div className="widget-1 widget-facility">
                <div className="widget-1-body">
                  <ul>
                    <li>
                      <Link to="#0">
                        <span className="img">
                          <img
                            src="assets/images/sidebar/icons/sidebar01.png"
                            alt="sidebar"
                          />
                        </span>
                        <span className="cate">24X7 Care</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#0">
                        <span className="img">
                          <img
                            src="assets/images/sidebar/icons/sidebar02.png"
                            alt="sidebar"
                          />
                        </span>
                        <span className="cate">100% Assurance</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#0">
                        <span className="img">
                          <img
                            src="assets/images/sidebar/icons/sidebar03.png"
                            alt="sidebar"
                          />
                        </span>
                        <span className="cate">Our Promise</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <Link to="#0">
                    <img
                      src="assets/images/sidebar/banner/banner01.jpg"
                      alt="banner"
                    />
                  </Link>
                </div>
              </div>
              <div className="widget-1 widget-trending-search">
                <h3 className="title">Trending Searches</h3>
                <div className="widget-1-body">
                  <ul>
                    <li>
                      <h6 className="sub-title">
                        <Link to="#0">mars</Link>
                      </h6>
                      <p>{t("Movies")}</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <Link to="#0">alone</Link>
                      </h6>
                      <p>{t("Movies")}</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <Link to="#0">music event</Link>
                      </h6>
                      <p>event</p>
                    </li>
                    <li>
                      <h6 className="sub-title">
                        <Link to="#0">NBA Games 2020</Link>
                      </h6>
                      <p>Sports</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="widget-1 widget-banner">
                <div className="widget-1-body">
                  <Link to="#0">
                    <img
                      src="assets/images/sidebar/banner/banner02.jpg"
                      alt="banner"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="article-section padding-bottom">
                <div className="section-header-1">
                  <h2 className="title">{t("Movies")}</h2>
                  <Link className="view-all" to="movie-grid">
                    View All
                  </Link>
                </div>
                <div className="row mb-30-none justify-content-center">
                  {/* {
                    initialState?.movies?.map((eachMovie, idx)=>{
                      return(
                          <div key={eachMovie.id} className="col-sm-6 col-lg-4">
                            <div className="movie-grid">
                              <div className="movie-thumb c-thumb">
                                <Link to="#0">
                                  <img
                                    src={eachMovie.movieUrl}
                                    alt="movie"
                                  />
                                </Link>
                              </div>
                              <div className="movie-content bg-one">
                                <h5 className="title m-0">
                                  <Link to="#0">{eachMovie.name}</Link>
                                </h5>
                                <ul className="movie-rating-percent">
                                  <li>
                                    <div className="thumb">
                                      <img
                                        src="assets/images/movie/tomato.png"
                                        alt="movie"
                                      />
                                    </div>
                                    <span className="content">88%</span>
                                  </li>
                                  <li>
                                    <div className="thumb">
                                      <img
                                        src="assets/images/movie/cake.png"
                                        alt="movie"
                                      />
                                    </div>
                                    <span className="content">88%</span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                      )
                    })
                  } */}
                  {
                    loading ? <Loader /> : <Movie2 />
                  }
                
                </div>
              </div>
              <div className="article-section padding-bottom">
                <div className="section-header-1">
                  <h2 className="title">{t("Event")}</h2>
                  <Link className="view-all" to="events.html">
                    View All
                  </Link>
                </div>
                <div className="row mb-30-none justify-content-center">
                  <div className="col-sm-6 col-lg-4">
                    <div className="event-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/event/event01.jpg"
                            alt="event"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">Digital Economy Conference 2020</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="event-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/event/event02.jpg"
                            alt="event"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">web design conference 2020</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="event-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/event/event03.jpg"
                            alt="event"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">digital thinkers meetup</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-section">
                <div className="section-header-1">
                  <h2 className="title">{t("Sport")}</h2>
                  <Link className="view-all" to="sports">
                    View All
                  </Link>
                </div>
                <div className="row mb-30-none justify-content-center">
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/sports/sports01.jpg"
                            alt="sports"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">football league tournament</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/sports/sports02.jpg"
                            alt="sports"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">world cricket league 2020</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-4">
                    <div className="sports-grid">
                      <div className="movie-thumb c-thumb">
                        <Link to="#0">
                          <img
                            src="assets/images/sports/sports03.jpg"
                            alt="sports"
                          />
                        </Link>
                        <div className="event-date">
                          <h6 className="date-title">28</h6>
                          <span>Dec</span>
                        </div>
                      </div>
                      <div className="movie-content bg-one">
                        <h5 className="title m-0">
                          <Link to="#0">basket ball tournament 2020</Link>
                        </h5>
                        <div className="movie-rating-percent">
                          <span>327 Montague Street</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
