import React, { useState } from "react";

export default function LatestProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
      {
      id: 1,
      title: "Afyiah24 – Online Pharmacy Marketplace",
      description:
        "Built a pharmacy-focused e-commerce platform with user, pharmacy, and admin roles. Implemented product management, order handling, and location-based recommendations. ",
      tech: "React.js, Laravel, MySQL (phpMyAdmin), HTML, CSS, JavaScript",
      images: Array.from({ length: 42 }, (_, i) => `/images/afiyah-${i + 1}.png`),
    },
  {
    id: 2,
    title: "Steam.Kiddy - Educational platform for kids",
    description:
      "An educational project based on the STEAM methodology (Science, Technology, Engineering, Art, and Math).",
    tech: "HTML, CSS, JavaScript, JSON",
    images: Array.from({ length: 15 }, (_, i) => `/images/steam.kiddy-${i + 1}.png`),
  },
    {
      id: 3,
      title: "High View ",
      description:
        "A dynamic website for selling adventure gear, featuring product listings, user interactions, and a responsive design.",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      images: Array.from({ length: 11 }, (_, i) => `/images/high-view-${i + 1}.png`),
    },
    {
      id: 4,
      title: "Next Page - Blog",
      description:
        "A blog website where users can read, share, and engage with content seamlessly. Designed for a clean user experience.",
      tech: "React, Laravel, MySQL",
      images: Array.from({ length: 12 }, (_, i) => `/images/nextpage-${i + 1}.png`),
    },
  ];

  return (
    <>
      {/* Header */}
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

      {/* Project Cards */}
      <div className="row" id="proj">
        {projects.map((project) => (
          <div className="col-lg-6 col-sm-10 mb-4" key={project.id}>
         <div
  className="card  d-flex flex-column"
  style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', color: '#333' }}
>
  {/* First Image of the Project */}
  <img
    src={project.images[0]}
    className="card-img-top"
    alt={`${project.title} preview`}
    style={{ maxHeight: "300px", objectFit: "cover" }}
  />

  <div className="card-body mt-3">
    <h5 className="card-title">{project.title}</h5>
    <p className="card-text responsive-text">{project.description}</p>
    <p className="card-text">
      Built using: <strong>{project.tech}</strong>
    </p>
    <a
      className="btn text-primary"
      data-bs-toggle="modal"
      data-bs-target="#projectModal"
      onClick={() => setSelectedProject(project)}
    >
      View Details -{">"}
    </a>
  </div>
</div>

          </div>
        ))}
      </div>

      {/* Modal with Carousel */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedProject?.title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {selectedProject && (
                <>
                
                  <div
                    id="carouselIndicators"
                    className="carousel slide position-relative"
                    data-bs-ride="carousel"
                  >
                    {/* Indicators */}
                    <div className="carousel-indicators">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          data-bs-target="#carouselIndicators"
                          data-bs-slide-to={index}
                          className={index === 0 ? "active" : ""}
                          aria-current={index === 0 ? "true" : undefined}
                          aria-label={`Slide ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Images */}
                    <div className="carousel-inner">
                      {selectedProject.images.map((img, index) => (
                        <div
                          className={`carousel-item ${
                            index === 0 ? "active" : ""
                          }`}
                          key={img}
                        >
                          <img
                            src={img}
                            className="d-block w-100"
                            alt={`Slide ${index + 1}`}
                            style={{
                              maxHeight: "400px",
                              objectFit: "contain",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Controls */}
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide="prev"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        style={{ filter: "invert(1)" }}
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>

                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselIndicators"
                      data-bs-slide="next"
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        border: "none",
                        borderRadius: "50%",
                        width: "44px",
                        height: "44px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        style={{ filter: "invert(1)" }}
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
