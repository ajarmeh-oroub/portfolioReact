import React from 'react';


export default function LatestProjects() {
  return (
    <>
      <div className="before-projects">
        <div className="small about-color" id="about">
          PORTFOLIO
        </div>
        <h2>Latest Projects</h2>
        <p>
          Here are some recent projects I've been working on, including my own
          personal projects.
        </p>
      </div>

   
      <div className="row" id="proj"> 
        <div className="col-lg-6 col-sm-10 mb-4"> 
            <div className="card h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}> 
                <div className="card-img-top"> <img src="images/proj1.png" className="img-fluid" alt="Burger Restaurant" />
                 </div> 
                 <div className="card-body"> 
                    <h5 className="card-title">Burger Restaurant</h5> 
                    <p className="card-text"> Mocking the design of a burger restaurant page only using HTML and CSS. </p>
                     <a href="https://ajarmeh-oroub.github.io/burger-rest/" className="btn btn-primary" style={{ backgroundColor: '#A16FEC', color: '#fff' }}>
                     Take a look →</a>
                      </div>
                       </div>
                        </div>
                         <div className="col-lg-6 col-sm-10 mb-4">
                             <div className="card h-100" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}> 
                                <div className="card-img-top">
                                     <img src="images/proj2.png" className="img-fluid" alt="Mocking Airbnb" /> 
                                     </div> 
                                     <div className="card-body">
                                         <h5 className="card-title">Mocking Airbnb</h5>
                                          <p className="card-text">Mocking the design of a Airbnb home page only using HTML and CSS.</p> 
                                          <a href="https://ajarmeh-oroub.github.io/airbnb-mock/" className="btn btn-primary" style={{ backgroundColor: '#A16FEC', color: '#fff' }}>Take a look →</a>
                                           </div> </div> </div> </div> 

    </>
  );
}
