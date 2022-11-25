import React from 'react'
import { useState } from 'react'
import user from '../../data/User'
const Admin = (props) => {
    const [login,setLogin]=useState()
    const [password,setPassword]=useState()
    const [alert,setAlert]=useState('')
    const [warning,setWarning]=useState('')
      const formSubmit=(e)=>{
      e.preventDefault()
      if (!login || !password) {
         setAlert('alert alert-danger')
         setWarning('Fill in the blanks')
      }else{
        if (login === user[0].username && password === user[0].password ) {
            
            props.history.push('/admin')
        }else{
            setAlert('alert alert-danger')
            setWarning('Login or password is wrong')
        }
      }
      }
    return (
        <>
            <section className='admin-form'>
                <div className="container-fluid">
                    <div className="row gap-2  mt-5">
                        <h1 className='text-center mt-3'><i class="fa-solid fa-user"></i> Admin</h1>
                        <form onSubmit={formSubmit} className='d-flex flex-column gap-2 justify-content-center align-items-center'>
                            <label className='text-center' htmlFor="login">Login:</label>
                            <input onChange={(e)=>{setLogin(e.target.value)}}  className='col-7 col-lg-5 rounded p-2'  type="text" placeholder='Login' />
                            <label className='text-center' htmlFor="password">Password:</label>
                            <input onChange={(e)=>{setPassword(e.target.value)}} className='col-7 rounded col-lg-5 p-2' type="password" placeholder='Password' />
                            <button className=' col-7 col-lg-5 btn btn-primary'> Submit </button>
                            <h1 className={` col-7 col-lg-5 ${alert}`}>{warning}</h1>
                        </form>
                    </div>
                </div>
            </section>
          
        </>
    )
}

export default Admin