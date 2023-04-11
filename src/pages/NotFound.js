import React from 'react'

const NotFound = () => {
  return (
    <>
        <section className="section-404 padding-top padding-bottom">
            <div className="container">
                <div className="thumb-404">
                <img src="assets/images/404.png" alt={404} />
                </div>
                <h3 className="title">Oops.. looks like you got lost :( </h3>
                <a href="/" className="custom-button">Back To Home <i className="flaticon-right" /></a>
            </div>
        </section>
    </>
  )
}

export default NotFound