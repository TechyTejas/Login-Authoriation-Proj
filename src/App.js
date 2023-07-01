import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
    <Layout>
      <Routes>
      <Route path='/' exact element={ <HomePage/>}> </Route>
      <Route path='/auth' element={<AuthPage/>}> </Route>
      <Route path='/profile' element={<UserProfile/>}> </Route>
      </Routes>
    </Layout>
    </React.Fragment>
  );
}

export default App;
