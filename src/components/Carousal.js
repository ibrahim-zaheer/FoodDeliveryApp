import React from 'react'
import ImageSliderForCarasoul from './ImageSliderForCarasoul'

export default function Carousal() {
  return (
    <div>

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {/* add zIndex to make code visible */}
    <div className='carousel-caption' style={{zIndex:"10"}}>
{/* add this to add search bar in the page */}
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    </div>
    {/* <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300×300/?burger" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div> */}
    <ImageSliderForCarasoul/>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×300/?pizza" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300×300/?fries" className="d-block w-100"style={{filter:"brightness(30%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
