import React from 'react'
import './styles/home.scss';

export default function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="home__block card ">
        <div className="row g-0 ">  
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">EDGAR LEUNG</h1>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>

          </div>
          <div className="col-md-4 ">
            <img src={require("../Pictures/ME.jpg")} className="img-fluid rounded-circle" alt="..."/>
          </div>
            <div className="home__block__dropdown dropdown ">
              <a className="btn btn-secondary dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>

              <ul className="dropdown-menu ">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
