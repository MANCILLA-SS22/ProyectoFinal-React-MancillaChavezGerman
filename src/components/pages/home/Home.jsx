import { Link } from "react-router-dom"
import "./Home.css"

function Home() {

  return (
    <div className="casa">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216581/trust-sig-ammo2-min_mggybj.jpg" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216591/GrabAGun-Gift-Card-GAG_GiftCert_dbtmi1.png" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216590/July23-Giveaway-Page_v3awfz.png" className="carrusel d-block" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216586/1_dppfbz.png" className="carrusel d-block" alt="..."/>
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

      <div className="container text-center pt-5 pb-5">
        <div className="row">
          <div className="containerX col">
            <img src="/imgs/handguns-1-min.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <Link to="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216579/rifles-1-min_vstxsi.jpg"><img src="/imgs/rifles-1-min.jpg" className="d-block w-100" alt="..."/></Link>
          </div>
          <div className="col">
            <Link to="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216580/shotguns-1-min_gs17cv.jpg"><img src="/imgs/shotguns-1-min.jpg" className="d-block w-100" alt="..."/></Link>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216578/optics-min_cdik1f.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216578/gear-min_jlq6yq.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216579/accessories-min_fdfxfg.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="col">
            <img src="https://res.cloudinary.com/dndvrsb0w/image/upload/v1689216581/ammunition-min_e7eze0.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
{/* 
      <div>
        <h2 className="feat mt-5 text-center text-light">Featured Products</h2>
      </div> */}


    </div>
  )
}

export default Home