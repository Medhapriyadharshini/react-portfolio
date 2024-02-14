import React from 'react'
import './Header.css'
import Mode from './Mode'


function Header(theme,setTheme) {

  return (
    <div>
      <div className="header">
        <nav>
          <a href="https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-32.png" className='logo'><img src="" alt="" />medha'SportfilO.</a>
          <ul className='mt-4'>
            
            <li> <a href="#home" className='text-warning fs-5'>Home</a></li>
            <li><a href="#about" className='text-warning fs-5'>About</a></li>
            <li><a href="#skills" className='text-warning fs-5'>Skills</a></li>
            <li><a href="#projects" className='text-warning fs-5'>Project</a></li>
            <li><a href="#contact" className='text-warning fs-5'>Contact</a></li>
          </ul>

          
          {/* <div className='toggle-btn' id='btn'>
            <span>dark</span>
            <img style={{height:'15px'}} src="https://www.freeiconspng.com/thumbs/moon-icon/moon-icon-32.png" alt="" /> 
          </div> */}
          <Mode isChecked={theme} handleChange={()=>setTheme(!theme)}/>
         
        </nav>
      </div>
    </div>

  )
}

export default Header