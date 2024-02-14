import React from 'react'
import img from './Assets/portfolio img.JPG'
import './Home.css'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import resume from './Assets/resume-medha.jpg'

function Home() {
  return (
    <div id='#home' className='container'>
     <MDBRow className='mb-3'>
        <MDBCol md='8'>
          
        {/* <div className='topanimation'>
          I'm a<span></span>
        </div> */}
        <h1 style={{marginTop:'100px'}}>Hello!</h1>
        <h1>I'm <span style={{color:'orange'}}>MEDHA</span> <span>PRIYADARSHINI</span></h1>
        {/* <h3 className='role'>And i'm a <span>Fullstack Developer</span></h3> */}
        <div className="wrapper">
            <div className="topanimation">I'm a</div>
              <ul className="textanimation mt-3">
                <li><span>FullStack Developer</span></li>
                <li><span>Web Developer</span></li>
                <li><span>Web Designer</span></li>
                <li><span>Freelancer</span></li>
              </ul>
              
          </div>
        <p>I'm a developer and a designer with a passion for website design. I always try my best to provide the best experience.</p>
        <div>
          <a className='btn btn-success ' download='computer' href={resume} >Resume  <i class="fa fa-download" aria-hidden="true"></i></a>
          <a className='btn btn-success mx-3' href="https://www.linkedin.com/in/medhapriyadarshini-k-115567213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn <i class="fa fa-eye" aria-hidden="true"></i></a>
        
        </div>
       
        </MDBCol>
        <MDBCol size='6' md='4'>
        <img className='mybg '   src="https://i.pinimg.com/originals/c7/30/4c/c7304cf8793ed54f489aa74f489ae62f.jpg" alt="" />
        <img className='myimg'   src={img} alt="" />
        </MDBCol>
      </MDBRow>
      
      
    </div>
  )
}

export default Home