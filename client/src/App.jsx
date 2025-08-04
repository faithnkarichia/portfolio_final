

import './App.css'
import React from 'react'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'

import Login from './pages/Login'
import Navbar from './components/Navbar'
import ProjectsAdmin from './pages/ProjectsAdmin'
import CertificatesAdmin from './pages/CertificatesAdmin'
import AdminDashboard from './pages/AdminDashboard'


function App() {
 

  return (
    
      <Routes>
        <Route path="/" element={
           <>
      <Hero/>
      <TechStack/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
        }/>

        <Route path="/login" element={
          <Login/>
        }/>
        <Route path="/Navbar" element={
          <Navbar/>
        }/>
        <Route path="/projectsAdmin" element={
          <ProjectsAdmin/>
        }/>
        <Route path="/certificatesAdmin"  element={
          <CertificatesAdmin/>
        }/>
        <Route path="/adminDashboard" element={
          <AdminDashboard/>
        }/>
       
      </Routes>
    

   
  )
}

export default App
