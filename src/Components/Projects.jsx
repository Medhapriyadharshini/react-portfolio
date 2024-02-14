import  React, { useState } from 'react'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBRipple
} from 'mdb-react-ui-kit';
import './Projects.css'
import HealthWellness from './Assets/health&wellness.png'
import BankWebsite from './Assets/bankwebsite.png'
import BmiCalculator from './Assets/bmicalculator.png'
import BudgetCalculator from  './Assets/budgetcalculator.png'
import LuminarWebsite from './Assets/luminarwebsite.png'
import MoviesSearch from './Assets/moviesearch.png'
import RestaurantApp from './Assets/restaurantapp.png'
import TravelBlog from './Assets/travelblog.png'
import Portfoliosundarpichai from './Assets/portfoliosunderpichai.png'
import DiscountCalc from './Assets/discountcalculator.png'
import DoctorBook from './Assets/doctorbookingapp.png'


function Projects() {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };


  return (
    <div className='container' id='projects' >
      <h1 className='text-center mb-5'>Projects</h1>
      <MDBTabs className='mb-5 d-flex justify-content-center'>
        <MDBTabsItem  >
          <MDBTabsLink className='fs-4 text-warning ' onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Html & Css
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  className='fs-4 text-warning' onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            JavaScript
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink  className='fs-4 text-warning' onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            React
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane open={basicActive === 'tab1'}>
  <div className="container">
          <MDBRow className='row-cols-1 row-cols-md-2 g-4'>


      <MDBCol>
        <div className="container mb-5">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={HealthWellness} fluid alt='...' />
        
          <MDBCardBody className='info'>
            <MDBCardTitle>Health & Wellness Website</MDBCardTitle>
            <MDBCardText>
              health and Wellness website that you need to know all about Abundant life Health and Wellness Hub. HTML5 and CSS3 are used on this. 
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3'href='https://medhapriyadharshini.github.io/HealthandWellnessHub/ '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/HealthandWellnessHub.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Health & Wellness Website</h4>
        </div>
      </MDBCol>


      <MDBCol>
        <div className="container">
        <MDBCard className='bigcard'  >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={TravelBlog} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Travel Blog - Santhosh George Kulangara</MDBCardTitle>
            <MDBCardText>
              India's first space traveller Santhosh George Kulangara's travel blog website by using HTML5 and CSS3.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://medhapriyadharshini.github.io/travel-blog/ '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/travel-blog.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Travel Blog</h4>
        </div>
       
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={LuminarWebsite} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Luminar Website</MDBCardTitle>
            <MDBCardText>
              Website of leading Software Training Institute in Kochi and Calicut. HTML5 and CSS3 are used on this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://medhapriyadharshini.github.io/luminar-courses/ '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/luminar-courses.git   '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Luminar Website</h4>
      </div>
      </MDBCol>
   

      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={Portfoliosundarpichai} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Portfolio - Sundar Pichai</MDBCardTitle>
            <MDBCardText>
              Portfolio about SUNDAR PICHAI, The CEO of Aphabetic Inc and Google by using HTML5 & CSS3.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://medhapriyadharshini.github.io/sundarpichai-portfolio/  '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/sundarpichai-portfolio.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>SundarPichai Portfolio</h4>
      </div>
      </MDBCol>




    </MDBRow>
          </div>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab2'}>
          <div className="container">
          <MDBRow className='row-cols-1 row-cols-md-2 g-4'>

            
          <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={BmiCalculator} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>BMI Calculator</MDBCardTitle>
            <MDBCardText>
              Body Mass Index (BMI) calculator is used to indicate body mass content.It determines a person is underweight,overweight or obese. HTML5 and CSS3 are used on this website. 
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://medhapriyadharshini.github.io/BMI-Calculator/  '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href=' https://medhapriyadharshini.github.io/BMI-Calculator/ '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>BMI Calculator</h4>
      </div>
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={BankWebsite} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Bank Website</MDBCardTitle>
            <MDBCardText>
              A Banks Website ,it is used to Deposite Money and Withdraw Money as the user wanted. HTML5,CSS3 and JavaScript are used in this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://medhapriyadharshini.github.io/Bank-website/ '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/Bank-website.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Bank Website</h4>
      </div>
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={DiscountCalc} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Discount Calculator</MDBCardTitle>
            <MDBCardText>
             This website uses a products original price and discount percentage to find the final price and the amount you saved. HTML5,CSS3 and JavaScript are used in this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3'>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark'>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Discount Calculator</h4>
      </div>
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={MoviesSearch} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Movie Search App</MDBCardTitle>
            <MDBCardText>
              This is a movie search app,it gives you the information about the movie plot, director name, actors  of your favourite movies. HTML5,CSS3 and JavaScript are used in this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href=' https://medhapriyadharshini.github.io/movie-search/'>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/movie-search.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Movie Search App</h4>
      </div>
      </MDBCol>




    </MDBRow>
          </div>
        </MDBTabsPane>
        <MDBTabsPane open={basicActive === 'tab3'}>
          <div className="container">
          <MDBRow className='row-cols-1 row-cols-md-2 g-4'>


          <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={RestaurantApp} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Restaurant Listing App</MDBCardTitle>
            <MDBCardText>
             This is a Restaurants name and their dishes listing app. React.js is used create this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://restaurantapp-react.netlify.app/'>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/RestaurantApp-frontend.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Restaurant Listing App</h4>
      </div>
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={DoctorBook} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Doctor Booking App</MDBCardTitle>
            <MDBCardText>
              This is a Doctor Booking app, that gives you the details of a doctor. You can refer the address, contact details and consulting time of a Doctor. React.js is used create this website.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://doctorbooking-reactapp.netlify.app/  '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/doctor-booking-frontend.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Doctor Booking App</h4>
      </div>
      </MDBCol>


      <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={BudgetCalculator} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Budget Calculator</MDBCardTitle>
            <MDBCardText>
             Budget calculator, that will help you to help you to plan your expense and manage your money.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3' href='https://budget-calculator-medhapriyadarshini.netlify.app/ '>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark' href='https://github.com/Medhapriyadharshini/discount-calculator.git '>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h4 className='text-warning'>Budget Calculator</h4>
      </div>
      </MDBCol>


      {/* <MDBCol>
      <div className="container">
        <MDBCard className='bigcard' >
        <MDBCardImage className='bigcardimg' style={{height:'350px',width:'630px'}} src={} fluid alt='...' />
          <MDBCardBody className='info'>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a longer card with supporting text below as a natural lead-in to additional content.
              This content is a little bit longer.
            </MDBCardText>
            <MDBBtn className='bg-light text-dark mx-3'>Live Link</MDBBtn>
            <MDBBtn className='bg-light text-dark'>Github Link</MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <h1 className='text-dark'>Project</h1>
      </div>
      </MDBCol> */}
    </MDBRow>
          </div>
        </MDBTabsPane>
      </MDBTabsContent>
      
    </div>
  )
}

export default Projects