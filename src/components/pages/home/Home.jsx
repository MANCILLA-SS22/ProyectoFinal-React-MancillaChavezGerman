import "./Home.css"

function Home() {

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/imgs/trust-sig-ammo2-min.jpg" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/imgs/GrabAGun-Gift-Card-GAG_GiftCert.jpg" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/imgs/July23-Giveaway-Page.jpg" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="/imgs/1.png" className="carrusel d-block" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <img src="/imgs/handguns-1-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="/imgs/rifles-1-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="/imgs/shotguns-1-min.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <img src="/imgs/optics-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="/imgs/gear-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="/imgs/accessories-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="/imgs/ammunition-min.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
{/* 
      <div>
        <h2 className="feat mt-5 text-center text-light">Featured Products</h2>
      </div> */}


    </>
  )
}

export default Home