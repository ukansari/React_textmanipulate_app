import React from 'react'

export default function About(props) {
    const submitForm=()=>{
        alert("Form Is Submited Successfully")
    }
  return (
    <>
    
    <div>
      
      <div className={`container my-2 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} style={{display:'flex' ,flexDirection:'rows '}}> 
        <div className='container ' style={{padding:'30vh 2px'}}>
            <h3>We are Text Manipulator!</h3>
        <p>Text Manipulator is word counter and character counter utility which can be used to manipulate your 
      text , you can copy text as well as convert to text in upper as well as lower case and you can clear the text 
      and able to do the changes in color mode that is dark or light "
   </p>
        </div>
      <form>
        <div className='contaner ' style={{padding:'15vh 5px',border:'2px solid #ced4da',borderRadius:'10px '}}>
  <div className="mb-3"  >
    <label htmlFor="exampleInputName" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='Enter Full Name' id="exampleInputName"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputMobile" className="form-label">Mobile</label>
    <input type="integer" className="form-control" placeholder='Enter Mobile Number' id="exampleInputMobile"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
    <input type="email" className="form-control" placeholder='Enter Mobile Email  ' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"onClick={submitForm}>Submit</button>
        </div>
</form>

         </div>
      </div>
         </>
  )
}
