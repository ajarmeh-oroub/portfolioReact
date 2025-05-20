import React from 'react';

export default function Services() {
  return (
    <>
      <div className="row">
        {/* Web Development Card */}
        <div className="col-md-4 mb-4 cards">
          <div className="card d-flex flex-column h-100 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="card-body">
              <div className="mb-4" style={{ fontSize: '2rem', color: "#B197FC" }}>
                <i className="fa-solid fa-globe"></i>
              </div>
              <h5 className="card-title">Web Development</h5>
              <p className="card-text">
                Building dynamic and responsive websites using the latest technologies like HTML, CSS, JavaScript, and PHP.
              </p>
            </div>
          </div>
        </div>

        {/* Full-Stack Development Card */}
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="card-body">
              <div className="mb-4" style={{ fontSize: '2rem', color: "#B197FC" }}>
                <i className="fa-solid fa-code"></i>
              </div>
              <h5 className="card-title">Full-Stack Development</h5>
              <p className="card-text">
                Expertise in both front-end and back-end technologies, delivering complete web solutions using frameworks like React and Laravel.
              </p>
            </div>
          </div>
        </div>

       
        {/* Backend Development Card */}
        <div className="col-md-4 mb-4">
          <div className="card d-flex flex-column h-100 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="card-body">
              <div className="mb-4" style={{ fontSize: '2rem', color: "#B197FC" }}>
                <i className="fa-solid fa-server"></i>
              </div>
              <h5 className="card-title">Backend Development</h5>
              <p className="card-text">
                Developing robust and secure backend systems using  Laravel, integrated with SQL databases.
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </>
  );
}
