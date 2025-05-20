import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="small about-color text-center col-12" id="about">
        ABOUT ME
      </div>
      <div>
        <section className="py-5">
          <div className="container">
            <h3 className="display-6 fw-bold mb-3">Who am I?</h3>
            <h6 className="text-primary fw-semibold mb-4">
              I'm Oroub, Full-Stack Developer
            </h6>

            <p className="mb-4  responsive-text">
              I’m a <strong>Full-Stack Web Developer</strong> with hands-on
              experience in <strong>Laravel</strong>,{" "}
              <strong>ASP.NET Core</strong>, <strong>React.js</strong>, and{" "}
              <strong>Angular</strong>. I build scalable applications — from
              powerful back-ends to sleek front-ends.
            </p>

        <div className="p-4 rounded shadow-sm mb-4 card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', color: '#333' }}>
  <h5 className="h5 fw-semibold mb-3" >
    💼 What I Bring to the Table
  </h5>
  <ul className="list-unstyled" style={{ color: '#444' }}>
    <li><strong>Backend Development:</strong> Laravel (PHP) & ASP.NET Core (C#)</li>
    <li><strong>Frontend Development:</strong> React.js & Angular</li>
    <li><strong>Database Architecture:</strong> MySQL and SQL Server</li>
    <li><strong>Third-Party Integration:</strong> CRMs, chat, analytics, payments</li>
    <li><strong>End-to-End Workflow:</strong> From planning to deployment</li>
  </ul>
</div>

<div className="p-4 rounded shadow-sm mb-4 card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', color: '#333' }}>
  <h5 className="h5 fw-semibold mb-3" >
    🚀 Why Clients Trust Me
  </h5>
  <ul className="list-unstyled" style={{ color: '#444' }}>
    <li><strong>Ownership & Accountability:</strong> Every project gets my full attention</li>
    <li><strong>Clear Communication:</strong> Fast responses, no confusion</li>
    <li><strong>On-Time Delivery:</strong> I stick to deadlines and get things done</li>
    <li><strong>Problem-Solver:</strong> I turn challenges into solutions</li>
    <li><strong>Long-Term Thinking:</strong> Code that scales and lasts</li>
  </ul>
</div>

          </div>
        </section>
        <br />
        <div className="connect">
          <ul className="connect-list">
            <li className="nav-item connect-with-me">CONNECT WITH ME</li>

            <li className="nav-item">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/oroub-ajarmeh-86493a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <img
                  src="images/linkedin.png"
                  alt="linkedin"
                  className="img-hero"
                />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/ajarmeh-oroub" target="blank">
                <img
                  src="images/github.webp"
                  alt="github"
                  className="img-hero"
                />
              </a>
            </li>
          </ul>
        </div>
        <br />
        <br /> <br />
        <br />
      </div>

      <div className="circle-container">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        {/* <div className="circle" />
      <div className="circle" /> */}
      </div>
      <div className="">
        <h5 className="lang-title">Crafted designs for</h5>
        <div className="lang">
          <div>
            <img
              src="images/laravel.svg"
              alt="laravel"
              className="img-lang"
            />
          </div>
          <div>
            <img src="images/php.png" alt="php" className="img-lang" />
          </div>
          <div>
            <img src="images/physics.png" alt="react" className="img-lang" />
          </div>
          <div>
            <img
              src="images/angular.png"
              alt="angular"
              className="img-lang"
            />
          </div>
          <div>
            <img src="images/js.png" alt="JS" className="img-lang" />
          </div>
          <br />
          <br /> <br />
          <br />
        </div>
      </div>
      <div className="circle-container">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        {/* <div className="circle" />
      <div className="circle" /> */}
      </div>
      <div className="what-titles">
        <div className="small about-color">
          SERVICES <br />
        </div>
        <h3>
          {" "}
          Here is What I Can Offer <br />
        </h3>
        <br />
        <p className="small">
          These are the quality services that i can offer <br />{" "}
        </p>
      </div>
    </>
  );
}
