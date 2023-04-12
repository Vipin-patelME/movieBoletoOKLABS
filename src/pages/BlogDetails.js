import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetails = () => {
  return (
    <>
        <section className="main-page-header speaker-banner bg_img" data-background="assets/images/banner/banner07.jpg">
            <div className="container">
            <div className="speaker-banner-content">
                <h2 className="title">blog single</h2>
                <ul className="breadcrumb">
                <li>
                    <Link to="index.html">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="blog.html">
                    blog
                    </Link>
                </li>
                <li>
                    blog single
                </li>
                </ul>
            </div>
            </div>
        </section>
        <section className="blog-section padding-top padding-bottom">
            <div className="container">
            <div className="row justify-content-center mb-30-none">
                <div className="col-lg-8 mb-50 mb-lg-0">
                <article>
                    <div className="post-item post-details">
                    <div className="post-thumb">
                        <img src="assets/images/blog/blog01.jpg" alt="blog" />
                    </div>
                    <div className="post-content">
                        <div className="post-meta text-center">
                        <div className="item">
                            <Link to="#0">
                            <i className="flaticon-conversation" />
                            <span>30</span>
                            </Link>
                        </div>
                        <div className="item">
                            <Link to="#0">
                            <i className="flaticon-share-1" />
                            <span>22</span>
                            </Link>
                        </div>
                        </div>
                        <div className="content">
                        <div className="entry-content p-0">
                            <div className="left">
                            <span className="date">Dece 15, 2020 BY </span>
                            </div>
                        </div>
                        <div className="post-header">
                            <h4 className="m-title">
                            Cheap Movie Tickets - Bring Your Loved Ones to See New Releases
                            </h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis.
                            </p>
                            <blockquote>
                            Modi perferendis ipsa, dolorum eaque accusantium! Velitlibero fugit dolores repellendus consequatur nisi, deserunt aperiam a ea ex hic, iusto atque, quas. Aliquam rerum dolores saepe sunt, assumenda voluptas.
                            </blockquote>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                            <h4 className="title">
                            Bring Your Loved Ones to See New Releases
                            </h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse ultrices gravida. Risus do viverra maecenas accumsan lacus vel facilisis. 
                            </p>
                        </div>
                        <div className="tags-area">
                            <div className="tags">
                            <span>
                                Tags : 
                            </span>
                            <div className="tags-item">
                                <Link to="#0"> Tickets </Link>
                                <Link to="#0"> Coming Soon </Link>
                                <Link to="#0"> Movies </Link>
                            </div>
                            </div>
                            <ul className="social-icons">
                            <li>
                                <Link to="#0">
                                <i className="fab fa-facebook-f" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0" className="active">
                                <i className="fab fa-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                <i className="fab fa-instagram" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                <i className="fab fa-pinterest" />
                                </Link>
                            </li>
                            <li>
                                <Link to="#0">
                                <i className="fab fa-google" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="blog-author">
                    <div className="author-thumb">
                        <Link to="#0">
                        <img src="assets/images/blog/author.jpg" alt="blog" />
                        </Link>
                    </div>
                    <div className="author-content">
                        <h5 className="title">
                        <Link to="#0">
                            Lee Burke 
                        </Link>
                        </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et dolore magna aliqua.Quis ipsum suspendisse .
                        </p>
                    </div>
                    </div>
                    <div className="blog-comment">
                    <h5 className="title">comments</h5>
                    <ul className="comment-area">
                        <li>
                        <div className="blog-thumb">
                            <Link to="#0">
                            <img src="assets/images/blog/author.jpg" alt="blog" />
                            </Link>
                        </div>
                        <div className="blog-thumb-info">
                            <span>13 days ago</span>
                            <h6 className="title"><Link to="#0">carl morgan</Link></h6>
                        </div>
                        <div className="blog-content">
                            <p>
                            Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="blog-thumb">
                            <Link to="#0">
                            <img src="assets/images/blog/author.jpg" alt="blog" />
                            </Link>
                        </div>
                        <div className="blog-thumb-info">
                            <span>13 days ago</span>
                            <h6 className="title"><Link to="#0">john flores</Link></h6>
                        </div>
                        <div className="blog-content">
                            <p>
                            Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                            </p>
                        </div>
                        </li>
                        <li>
                        <div className="blog-thumb">
                            <Link to="#0">
                            <img src="assets/images/blog/author.jpg" alt="blog" />
                            </Link>
                        </div>
                        <div className="blog-thumb-info">
                            <span>13 days ago</span>
                            <h6 className="title"><Link to="#0">carl morgan</Link></h6>
                        </div>
                        <div className="blog-content">
                            <p>
                            Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris. Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                            </p>
                        </div>
                        </li>
                    </ul>
                    <div className="leave-comment">
                        <h5 className="title">leave comment</h5>
                        <form className="blog-form">
                        <div className="form-group">
                            <input type="text" placeholder="Enter Your Full Name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Enter Your Email Address" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Write A Message" required defaultValue={""} />
                        </div>
                        <div className="form-group">
                            <input type="submit" defaultValue="Submit Now" />
                        </div>
                        </form>
                    </div>
                    </div>
                </article>
                </div>
                <div className="col-lg-4 col-sm-10 col-md-8">
                <aside>
                    <div className="widget widget-search">
                    <h5 className="title">search</h5>
                    <form className="search-form">
                        <input type="text" placeholder="Enter your Search Content" required />
                        <button type="submit"><i className="flaticon-loupe" />Search</button>
                    </form>
                    </div>
                    <div className="widget widget-post">
                    <h5 className="title">latest post</h5>
                    <div className="slider-nav">
                        <span className="flaticon-angle-pointing-to-left widget-prev" />
                        <span className="flaticon-right-arrow-angle widget-next active" />
                    </div>
                    <div className="widget-slider owl-carousel owl-theme">
                        <div className="item">
                        <div className="thumb">
                            <Link to="#0">
                            <img src="assets/images/blog/slider01.jpg" alt="blog" />
                            </Link>
                        </div>
                        <div className="content">
                            <h6 className="p-title">
                            <Link to="#0">Three Ways to Book Sporting Event Tickets</Link>
                            </h6>
                            <div className="meta-post">
                            <Link to="#0" className="mr-4"><i className="flaticon-loupe" />20 Comments</Link>
                            <Link to="#0"><i className="flaticon-loupe" />466 View</Link>
                            </div>
                        </div>
                        </div>
                        <div className="item">
                        <div className="thumb">
                            <Link to="#0">
                            <img src="assets/images/blog/slider01.jpg" alt="blog" />
                            </Link>
                        </div>
                        <div className="content">
                            <h6 className="p-title">
                            <Link to="#0">Three Ways to Book Sporting Event Tickets</Link>
                            </h6>
                            <div className="meta-post">
                            <Link to="#0" className="mr-4"><i className="flaticon-loupe" />20 Comments</Link>
                            <Link to="#0"><i className="flaticon-loupe" />466 View</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="widget widget-follow">
                    <h5 className="title">Follow Us</h5>
                    <ul className="social-icons">
                        <li>
                        <Link to="#0" className>
                            <i className="fab fa-facebook-f" />
                        </Link>
                        </li>
                        <li>
                        <Link to="#0" className="active">
                            <i className="fab fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link to="#0" className>
                            <i className="fab fa-pinterest-p" />
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <i className="fab fa-google" />
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <i className="fab fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="widget widget-categories">
                    <h5 className="title">categories</h5>
                    <ul>
                        <li>
                        <Link to="#0">
                            <span>Showtimes &amp; Tickets</span><span>50</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>Latest Trailers</span><span>43</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>Coming Soon </span><span>34</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>In Theaters</span><span>63</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>Release Calendar</span><span>11</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>Stars</span><span>30</span>
                        </Link>
                        </li>
                        <li>
                        <Link to="#0">
                            <span>Horror Movie </span><span>55</span>
                        </Link>
                        </li>
                    </ul>
                    </div>
                    <div className="widget widget-tags">
                    <h5 className="title">featured tags</h5>
                    <ul>
                        <li>
                        <Link to="#0">creative</Link>
                        </li>
                        <li>
                        <Link to="#0">design</Link>
                        </li>
                        <li>
                        <Link to="#0">skill</Link>
                        </li>
                        <li>
                        <Link to="#0">template</Link>
                        </li>
                        <li>
                        <Link to="#0" className="active">landing</Link>
                        </li>
                    </ul>
                    </div>
                </aside>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default BlogDetails