import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../components/Login';
import Register from '../components/Register';
import ForgotPassword from '../components/ForgotPassword';

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  background: #4f38de;
  background: linear-gradient(to right, #6a11cb, #4f38de);
  background: -webkit-linear-gradient(left, #6a11cb, #4f38de);
`;

const FormBackgroundLayout = () => {
  return (
    <MainWrapper className='ai-center'>
      <div className='wrap-loginForm'>
        <Router>
          <Routes>
            <Route path='/' exact elements={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>
    </MainWrapper>
  );
};

export default FormBackgroundLayout;
