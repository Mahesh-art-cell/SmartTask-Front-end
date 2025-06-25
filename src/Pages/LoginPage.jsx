
import React from 'react';
import Login from '../components/auth/Login';
import Header from '../components/common/Header';

const LoginPage = () => (
  <div>
    <Header />
    <Login onLogin={() => {}} />
  </div>
);

export default LoginPage;