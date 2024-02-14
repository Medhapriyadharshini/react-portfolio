import React from 'react'

function Contact() {
  return (
    <div className='container mb-5' style={{marginTop:'150px',marginBottom:'200px'}} id='contact'>
      <h1 className='text-center mb-5 mt-5'>get in touch!</h1>
      <div className='row'>
        <div className="col-6" >

          <h1 className='text-center mb-5' style={{ marginTop: '60px' }}>Contact Me</h1>
          <h4 className='mx-5 mb-3'>Lets Work Together</h4>
          <div className='mx-5'>
            <p className='justify-content '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium debitis minus commodi molestiae modi aperiam minima suscipit cum voluptate esse, nesciunt aspernatur iure nulla maiores facilis velit, rem earum.
              natus ad quod quasi magni ratione obcaecati molestiae tempora. Impedit eveniet beatae repudiandae id vel praesentium nesciunt, libero quibusdam?</p>
          </div>

          <div className='mx-5'>
            <p><i class="fa fa-envelope" aria-hidden="true"></i> medhapriyadarshinik@gmail.com</p>
            <p><i class="fa fa-phone-square" aria-hidden="true"></i> +91-7306392887</p>
          </div>
        </div>

        <div className="col-6">

          <div style={{ width: '40rem' }} className='container p-5'>

            <h2 className='text-center mb-5'>Message with me</h2>
            <div className="row g-2 mb-4">
              <div className='col-6' md>
                <label controlId="floatingInputGrid" label="Full Name">
                  <input className='px-5 py-2 rounded-3' type="text" placeholder="name@example.com" />
                </label>
              </div>
              <div className='col-6' md>
                <label controlId="floatingInputGrid" label="Phone">
                  <input className='px-5 py-2 rounded-3' type="text" placeholder="Phone Number" />
                </label>
              </div>
            </div>
<div>
<label className='mb-4' controlId="floatingInputGrid" label="Email Address">

<input className=' py-2 rounded-3' style={{paddingLeft:'187px',paddingRight:'187px'}} type="email" placeholder="name@example.com" />
</label>

</div>
           
            <label className='mb-4' controlId="floatingTextarea2" label="Comments">
              <input className=' rounded-3'
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px', paddingLeft:'187px',paddingRight:'187px' }}
              />
            </label>
            <div>
              <button className='btn btn-success px-5'>Send</button>
            </div>



          </div>


        </div>

      </div>
    </div>
  )
}

export default Contact