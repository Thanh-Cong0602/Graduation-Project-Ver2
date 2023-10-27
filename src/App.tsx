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
  const navigate = useNavigate();
  interface RootState {
    userReducer: {
      role: string;
      loggedIn: boolean;
    };
  }
  const role = useSelector((state: RootState) => state.userReducer.role)
  const isLoggedIn = useSelector((state: RootState) => state.userReducer.loggedIn);
  useEffect(() => {
    if (isLoggedIn === false || isLoggedIn === null) {
      navigate("/homepage");
    }
  }, [isLoggedIn]);
  function getScreenComponentByRole(role: string) {
    switch (role) {
      case 'student':
        return <StudentScreen />;
      case 'advisor':
        return <AdvisorScreen />;
      case 'council':
        return <CouncilScreen />;
      case 'secretary':
        return <CouncilScreen />
      default:
        return <StudentScreen />;
    }
  }
  return (
    <>
      <div>
        <Routes>
          <Route path="/homepage" element={<>
            <Navbar />
            <HomePage />
          </>} />

          <Route path="/login_delegation" element={<LoginDelegation />} />
          <Route path="/login" element={<LoginScreen />} />

          {isLoggedIn ? (
            <Route path="*" element={<>
              <Navbar />
              {getScreenComponentByRole(role)}
            </>} />
          ) : null}
        </Routes>
      </div>
    </>
  )
}

export default App
