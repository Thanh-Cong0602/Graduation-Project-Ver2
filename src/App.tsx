import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './Component/Navbar/Navbar';
import HomePage from './Component/Homepage/Homepage';
import LoginScreen from './Component/LoginScreen/LoginScreen';
import LoginDelegation from './Component/LoginScreen/LoginDelegation';
import StudentScreen from './Component/Student/StudentScreen';
import AdvisorScreen from './Component/Advisor/AdvisorScreen';
import CouncilScreen from './Component/Council/CouncilScreen';

function App() {

  return (
    <>
    My app
    </>
  )
}

export default App
