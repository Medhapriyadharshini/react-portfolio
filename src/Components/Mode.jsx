import React, { useEffect, useState } from 'react'
import './Mode.css'

function Mode() {
    const [theme,setTheme]= useState()
    localStorage.getItem('theme')
    const toggleTheme=()=>{
        if(theme==='light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    };

    useEffect(()=>{
        localStorage.setItem('theme',theme)
        document.body.className=theme;
    },[theme])

  return (
    <div className={`Mode ${theme}`}>
        <button className='btn btn-primary' onClick={toggleTheme}>Dark</button>
    </div>
  )
}

export default Mode