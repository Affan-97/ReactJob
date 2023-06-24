import React from 'react'

 const AlertLogin = () => {
  return (
    <div className="alert alert-success absolute w-1/4  bottom-10 shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your purchase has been confirmed!</span>
  </div>
</div>
  )
}
const AlertRegister = () =>{
return (

  <div className="alert alert-success absolute w-1/4  bottom-10 shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your Account is Registered</span>
  </div>
</div>


)
}
const AlertSubmit = () =>{
  return (
  
    <div className="alert alert-success absolute w-1/4  bottom-10 shadow-lg">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Data Added</span>
    </div>
  </div>
  
  
  )
  }
  const AlertDelete = () =>{
    return (
    
      <div className="alert alert-error absolute w-1/4  bottom-10 shadow-lg">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
        <span>Data Deleted</span>
      </div>
    </div>
    
    
    )
    }

export {AlertLogin,AlertRegister,AlertSubmit,AlertDelete}
