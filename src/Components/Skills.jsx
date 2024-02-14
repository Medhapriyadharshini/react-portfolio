import React from 'react'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage
} from 'mdb-react-ui-kit';
import {
  MDBCardBody,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import './Skills.css'


function Skills() {
  return (
    <div id='skills' className='container' style={{marginTop:'150px',marginBottom:'200px'}}>

{/* <div className="container" style={{marginTop:'200px',marginBottom:'200px'}}> */}
    <h1 className='text-center' >Skills</h1>
    <p className='text-center ' style={{marginBottom:'80px'}}>There are many new technologies emerging all the time. These are the technologies i have worked with <i className='fa fa-arrow-down'></i> </p>

<div className="container">
<MDBRow className='row-cols-1 row-cols-md-4 g-5' style={{marginLeft:'100px', marginRight:'100px'}}>
      <MDBCol >
      <MDBCard  className='smallcard'style={{padding:'35px 60px 12px', height:'280px',width:'220px',paddingLeft:'23px'}} >
      <MDBCardImage className='cardimg' style={{height:'160px',width:'170px'}} overlay src='https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>HTML</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard className='smallcard' style={{padding:'18px 10px 40px 6px', height:'280px',width:'220px'}} >
      <MDBCardImage  className='cardimg d-flex justify-content-center' style={{height:'200px',width:'210px'}} overlay src='https://www.logolynx.com/images/logolynx/8f/8fb97dec724d750d2085173816712ffc.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>CSS</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard className='smallcard' style={{height:'280px',width:'220px'}} >
      <MDBCardImage  className='cardimg' style={{height:'240px',width:'220px'}} overlay src='https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>JavaScript</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard  className='smallcard' style={{padding:'30px 12px 60px 12px', height:'280px',width:'220px'}} >
      <MDBCardImage className='cardimg'  style={{height:'180px',width:'200px'}} overlay src='https://pluspng.com/img-png/logo-mongodb-png-mongodb-logo-png-400.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>MongoDB</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
    </MDBRow>
      


    <MDBRow className='row-cols-1 row-cols-md-4 g-5 mt-5' style={{marginLeft:'100px', marginRight:'100px'}}>
      <MDBCol>
      <MDBCard className='smallcard' style={{padding:'30px  60px 13px', height:'280px',width:'220px',paddingLeft:'23px'}} >
      <MDBCardImage className='cardimg'  style={{height:'170px',width:'170px'}} overlay src='https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>Express</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard  className='smallcard' style={{padding:'30px 60px 12px', height:'280px',width:'220px',paddingLeft:'20px'}} >
      <MDBCardImage className='cardimg' style={{height:'160px',width:'180px'}} overlay src='https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>React</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard className='smallcard' style={{padding:'30px  60px 12px', height:'280px',width:'220px',paddingLeft:'25px'}} >
      <MDBCardImage className='cardimg' style={{height:'170px',width:'170px'}} overlay src='https://cdn3.freelogovectors.net/wp-content/uploads/2019/01/angular-logo.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark'  style={{marginTop:'200px'}}>Angular</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
      <MDBCol>
      <MDBCard  className='smallcard' style={{padding:'30px 60px 12px', height:'280px',width:'220px',paddingLeft:'24px'}} >
      <MDBCardImage className='cardimg' style={{height:'170px',width:'170px'}} overlay src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' alt='...' />
      <MDBCardOverlay>
        {/* <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This
          content is a little bit longer.
        </MDBCardText> */}
        <MDBCardText className='text-center fs-3 text-dark' style={{marginTop:'200px'}}>Node</MDBCardText>
      </MDBCardOverlay>
    </MDBCard>

      </MDBCol>
    </MDBRow>
      
    </div>
    {/* </div> */}
    </div>
  )
}

export default Skills