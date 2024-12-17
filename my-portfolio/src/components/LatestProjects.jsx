import React from "react";

export default function LatestProjects() {
  return (
    <>
      {/* Header Section */}
      <div className="before-projects">
        <div className="small about-color" id="about">
          PORTFOLIO
        </div>
        <h2>Latest Projects</h2>
        <p>
          A brief overview of my most recent projects. Check out their unique
          features and designs!
        </p>
      </div>

      {/* Projects Row */}
      <div className="row" id="proj">
        {/* Project 1 - Steam.Kiddy */}
        <div className="col-lg-6 col-sm-10 mb-4">
          <div
            className="card h-80"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="card-body">
              <h5 className="card-title">Steam.Kiddy</h5>
              <p className="card-text">
                An educational project based on the STEAM methodology (
                <strong>
                  Science, Technology, Engineering, Art, and Math
                </strong>
                ). It engages kids with fun and interactive content to promote
                learning.
              </p>
              <p className="card-text">
                Built using: <strong>HTML, CSS, JavaScript, JSON</strong>, and
                local storage for saving progress.
              </p>
      
            </div>
          </div>
        </div>

        {/* Project 2 - High View */}
        <div className="col-lg-6 col-sm-10 mb-4">
          <div
            className="card h-80"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="card-body">
              <h5 className="card-title">High View</h5>
              <p className="card-text">
                A dynamic website for selling adventure gear, featuring product
                listings, user interactions, and a responsive design.
              </p>
              <p className="card-text">
                Built using: <strong>HTML, CSS, JavaScript, PHP</strong>, and{" "}
                <strong>MySQL</strong>.
              </p>
         
            </div>
          </div>
        </div>

        {/* Project 3 - Next Page */}
        <div className="col-lg-6 col-sm-10 mb-4">
          <div
            className="card h-80"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
          >
            <div className="card-body">
              <h5 className="card-title">Next Page</h5>
              <p className="card-text">
                A blog website where users can read, share, and engage with
                content seamlessly. Designed for a clean user experience.
              </p>
              <p className="card-text">
                Built using: <strong>React, Laravel</strong>, and{" "}
                <strong>MySQL</strong>.
              </p>
          
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
