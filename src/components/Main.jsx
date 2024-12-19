import React from 'react'

const Main = () => {
  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
          <img src="./assets/images/main.jpg" alt="card" className="card-img img-fluid" height={500} />
          <div className="card-image-overlay d-flex align-items-center ">
            <div className="container">
              <h5 className='card-title fs-1 fw-lighter'>Welcome to our store</h5>
              <p className='card-text fs-5 d-none d-sm-block max-w-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic veniam soluta molestias iure voluptatum doloremque recusandae? Recusandae, hic velit.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Main