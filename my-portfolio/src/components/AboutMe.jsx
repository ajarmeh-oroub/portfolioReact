import React from 'react'

export default function AboutMe() {
  return (
    <>
     <div className="small about-color text-center" id="about">
      AbOUT ME
    </div>
    <div className="skills">
   
  <div className="who-am-i">
   
    <h3 className='text-left'>Who am I?</h3>
    <h6 className='text-left'>I am Oroub, Fullstack Developer</h6>
    <p className="small text-left">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quos nostrum
      doloribus libero. Iste id deleniti, soluta, aliquam harum quo, quas quis
      iusto sit rem veniam odit aspernatur. Reprehenderit, provident.
    </p>
    <br />
    <div className="connect">
      <ul className="connect-list">
        <li className="nav-item connect-with-me">CONNECT WITH ME</li>
     
        <li className="nav-item">
          <a  target="_blank" href="https://www.linkedin.com/in/oroub-ajarmeh-86493a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <img
              src="images/linkedin.png"
              alt="linkedin"
              className="img-hero"
            />
          </a>
        </li>
        <li className="nav-item">
            <a href="https://github.com/ajarmeh-oroub" target='blank'>
              <img
                src="images/github.webp"
                alt="github"
                className="img-hero"
              />
            </a>
          </li>
      
      </ul>
    </div>
  </div>
  <div className="skills-inner">
    <div className="skill">
      <div className="skill-name small">HTML &amp; CSS</div>
      <div className="bar-container">
        <div className="bar html skill-name small">85%</div>
      </div>
    </div>
    <div className="skill">
      <div className="skill-name small">Python</div>
      <div className="bar-container">
        <div className="bar python small skill-name">70%</div>
      </div>
    </div>
    <div className="skill">
      <div className="skill-name small">JavaScript</div>
      <div className="bar-container">
        <div className="bar javascript small skill-name">98%</div>
      </div>
    </div>
    <div className="skill">
      <div className="skill-name small">Figma</div>
      <div className="bar-container">
        <div className="bar figma  skill-name small">91%</div>
      </div>
    </div>
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
          <img src="images/java.png" alt="java" className="img-lang" />
        </div>
        <div>
          <img src="images/php.png" alt="php" className="img-lang" />
        </div>
        <div>
          <img src="images/physics.png" alt="react" className="img-lang" />
        </div>
        <div>
          <img src="images/python.png" alt="python" className="img-lang" />
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
  
  )
}
