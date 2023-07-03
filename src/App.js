import { Routes, Route, Navigate   } from 'react-router-dom';
import React ,{useContext} from 'react';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx=useContext(AuthContext);
 
  return (
    <React.Fragment>
    <Layout>
      <Routes>
      <Route path='/' exact element={ <HomePage/>}> </Route>
      {!authCtx.isLoggedIn && (<Route path='/auth' element={<AuthPage/>}> </Route>)}
      {authCtx.isLoggedIn && (<Route path='/profile' element={<UserProfile/>}> </Route>)}
      <Route path='*'element={<Navigate to="/" />} ></Route>
      </Routes>
    </Layout>
    </React.Fragment>
  );
}

export default App;
