'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import './Menu.css'

const Menu = () => {
  const [isShow,setIsShow] = useState(document.body.clientWidth>700 ?false : true)
  const [left,setLeft] = useState(-150)
  const [clr,setClr] =useState("home")

  const fnResize =() =>{
    if(document.body.clientWidth<700){
    setIsShow(true)
    }
    else{
      setIsShow(false)
    }
  }
  window.addEventListener('resize',fnResize)
            const handleMobileBtnClick =() =>{
         setLeft(left === 0? -150 :0)
           }

           const fnMenuClick = (eve)=>{
            const {id} =eve.target
            eve.stopPropagation()
            setLeft(-150)
            setClr(id)
           }

  return (
    <div>
    { isShow && <button className='mobile-btn' onClick={handleMobileBtnClick}>
        <span></span>
        <span></span>
        <span></span>
        

      </button>
}
    <ul style ={{left}}  className={`${isShow? 'mobile-menu' : 'menu' }`}>
        <li ><Link href ="home" id="home" className={`${clr==="home"?'menuItem':''}`} onClick={fnMenuClick}>Home</Link></li>
        <li><Link href="/contact" id="contact" className={`${clr==="contact"?'menuItem':''}`}  onClick={fnMenuClick}>Contact</Link></li>
        <li><Link href="about"   id= "about"   className={`${clr==="about"?'menuItem':''}`} onClick={fnMenuClick}>About</Link></li>
    </ul>

     
     </div>
  )
}

export default Menu
