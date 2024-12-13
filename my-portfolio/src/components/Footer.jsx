import React from 'react'

export default function Footer() {
  return (
<>
  <hr />
  <footer className="foot">
    <div>
      <ul className="nav-list foot-list">
        <li className="nav-item ">
          <a href="#home" className="nav-foot">
            Home{" "}
          </a>
        </li>
        <li className="nav-item ">
          <a href="#about" className="nav-foot">
            About Me
          </a>
        </li>
        <li className="nav-item ">
          <a href="#proj" className="nav-foot">
            Portfolio
          </a>
        </li>
        <li className="nav-item ">
          <a href="#connect" className="nav-foot">
            Contact
          </a>
        </li>
      </ul>
    </div>
    
      <span className='d-flex'>
        <p className='mr-3' >Follow me: </p>
        <ul className="connect-list">
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/oroub-ajarmeh-86493a233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'>
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
        </span>

  </footer>
</>

  )
}
