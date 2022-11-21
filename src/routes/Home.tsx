import React from 'react'
import './styles/home.scss'; 

export default function Home() {
  return (
      <div className="home card" style={{maxWidth: "540px"}}>
        <div className="row g-0">
         
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">EDGAR LEUNG</h1>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..."/>
          </div>
        </div>
      </div>
    
  )
}
