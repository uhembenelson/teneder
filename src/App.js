import React from 'react'
import './App.css'
import Welcome from './Pages/Welcome/Welcome'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/Organization/SignUp/SignUp'
import Login from './Pages/Organization/Login/Login'
import ForgotPassword from './Pages/Organization/ForgotPassword/ForgotPassword'
import ResetPassword from './Pages/Organization/ResetPassword/ResetPassword'
import TwoFactor from './Pages/Organization/TwoFactor/TwoFactor'

const App = () => {
  return (
    <div className='container' >
      <div className='app' >
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/organization/signup' element={<SignUp />} />
          <Route path='/organization/signin' element={<Login />} />
          <Route path='/organization/twofactor' element={<TwoFactor />} />
          <Route path='/organization/forgot-password' element={<ForgotPassword />} />
          <Route path='/organization/reset-password' element={<ResetPassword />} />
        </Routes>

      </div>
    </div>

  )
}

export default App