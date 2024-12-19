import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

const Register = () => {
  return (
    <div>
      <NavBar />
      
      <div>
        <h2 className='text-center fs-1 mt-5 w-75 mx-auto pb-4 border-bottom mb-5'>Register</h2>
        <form className='container d-flex flex-column align-items-center'> 
        <div class="form-group mb-3 w-50">
            <label for="exampleInputFullName" className='mb-1'>Full Name</label>
            <input type="text" class="form-control" id="exampleInputFullName" aria-describedby="FullName" placeholder="Enter Your Name" />
          </div>
          <div class="form-group mb-3 w-50">
            <label for="exampleInputEmail1" className='mb-1'>Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" />
          </div>
          <div class="form-group mb-3 w-50">
            <label for="exampleInputPassword1" className='mb-1'>Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className='mb-3 w-50'>
            <span>Already has an account?</span><Link to="/login" className='ms-2'>Register</Link>
          </div>
          <button type="submit" class="btn btn-dark">Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register