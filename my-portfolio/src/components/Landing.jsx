import React from 'react'
import Header from './Header'
import Banner from './Banner'
import AboutMe from './AboutMe'
import Services from './Services'
import LatestProjects from './LatestProjects'
import Contact from './Contact'
import Footer from './Footer'


export default function Landing() {

  return (
    <div className='container'>
<Header/>
<div id="main">
<Banner/>
</div>
<div id='about'>
    <AboutMe/>
</div>
<div id='services'>
    <Services/>
</div>
<div id='latestprojects'>
    <LatestProjects />
</div>
<div id= 'contact '>
    <Contact/>
</div>
<div id='foorter'>
    <Footer/>
</div>

    </div>
  )
}
