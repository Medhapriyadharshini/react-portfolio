import React from 'react'
import {
  MDBRow, MDBCol, MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardHeader
} from 'mdb-react-ui-kit';
import aboutimg from './Assets/IMG-20220603-WA0077.jpg'


function About() {
  return (


    <div className='container' style={{ marginTop: '200px' }} id='about'>
      <MDBRow>
        <MDBCol md='4'>
          <img className='mybgabout' style={{borderRadius:'20px', height: "400px", width: '380px', marginTop: '10px', position: 'absolute', marginLeft: '32px' }} src="https://i.pinimg.com/originals/c7/30/4c/c7304cf8793ed54f489aa74f489ae62f.jpg" alt="" />
          <img style={{ width: '340px', height: '370px', marginTop: '25px', position: 'absolute', marginLeft: '53px' }} src={aboutimg} alt="" />
        </MDBCol>
        <MDBCol md='8'>
          <h1 style={{ marginBottom: '30px' }}>About Me</h1>
          <h4 className='text-warning'>FullStack Developer!</h4>
          I'm a Web Developer, who loves to create and beautify Websites and Apps.I'm a very driven and motivated individual who believes that each day should be challenging an rewarding.I have always been interested in learning new technologies.Also, i'm enthusiastic about working  as web developer and committed to improving my skills.  

          <MDBRow className=' row-cols-md-2 mt-4 '>
            <MDBCol>
              <MDBCard shadow='0' border='warning' background='white' className='mb-3'>
                {/* <MDBCardHeader>Header</MDBCardHeader> */}
                <MDBCardBody>
                  <MDBCardTitle className='text-center fs-4 text-primary mb-4'>Experience</MDBCardTitle>
                  
                  <MDBCardText className='text-center text-dark'>8 Months<br/>ME(A)RN Stack Developement Intern <br/>Luminar Technolab, Kochi</MDBCardText>
                </MDBCardBody>
              </MDBCard>

            </MDBCol>


            <MDBCol>
              <MDBCard shadow='0' border='warning' background='white' className='mb-3'>
                {/* <MDBCardHeader>Header</MDBCardHeader> */}
                <MDBCardBody>
                  <MDBCardTitle className='text-center fs-4 text-primary mb-4'>Education</MDBCardTitle>
                  <MDBCardText className='text-center text-dark'>
                   B.E Computer Sciend and Engineering <br/>Dhanalakshmi Srinivasan College of Engineering, Coimbatore
                  </MDBCardText>
                  
                </MDBCardBody>
              </MDBCard>

            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  )
}

export default About