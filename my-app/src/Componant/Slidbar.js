import EC1 from "../image/download (1).jpeg"
import EC2 from "../image/download (2).jpeg"
import EC3 from "../image/download.jpeg"


import React from 'react'

function Slidbar() {
  return (
    <>
    
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={EC1} className="d-block w-100" alt="..." height={500}/>
    </div>
    <div className="carousel-item">
      <img src={EC2} className="d-block w-100" alt="..." height={500}/>
    </div>
    <div className="carousel-item">
      <img src={EC3} className="d-block w-100" alt="..." height={500}/>
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
    
    
    
    
    </>
  )
}

export default Slidbar

