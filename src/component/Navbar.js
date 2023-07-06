import React from 'react'
import {Link } from 'react-router-dom'
export default function Navbar(props) {
//   const removeBodyClasses = ()=>{
//     document.body.classList.remove('bg-light')
//     document.body.classList.remove('bg-dark')
//     document.body.classList.remove('bg-warning')
//     document.body.classList.remove('bg-danger')
//     document.body.classList.remove('bg-success')
// }

    const toggle=(ele)=>{
//  removeBodyClasses()
    console.log(ele)
    document.body.style.backgroundColor='ele' 
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/text">Text</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
    </div>
    <div className='d-flex'>
       <div className='bg-primary rounded my-2 mx-1 'onClick={toggle('primary')} style={{height:'30px', width:'30px',cursor:'pointer'} }>
    </div>
    <div className='bg-warning rounded my-2 mx-1 'onClick={toggle('warning')} style={{height:'30px', width:'30px',cursor:'pointer'} }>
    </div>  
    <div className='bg-danger rounded my-2 mx-1 'onClick={toggle('danger')} style={{height:'30px', width:'30px',cursor:'pointer'} }>
    </div>
    <div className='bg-success rounded my-2 mx-1 ' onClick={toggle('success')}style={{height:'30px', width:'30px',cursor:'pointer'} }>
    </div>
    </div>
    <div className="form-check form-switch">    
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.textMode}</label>
</div>
  </div>
</nav>
 
    </div>
  )

  }