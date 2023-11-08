import React from 'react'
import { Home, Login,Profile,Register, ResetPassword } from './pages';
import { Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom'

function Layout(){
  const user = null;
  const location = useLocation()

  return user?.token ? (
    <Outlet/>
  ):(
    <Navigate to="/login" state={{from: location}} replace/>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element= {<Home/>}/>
          <Route path="/profile/:id?" element= {<Profile/>}/>
        </Route>
        <Route path="/register" element= {<Register/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/reset-password" element= {<ResetPassword/>}/>
      </Routes>
    </div>
  )
}

export default App