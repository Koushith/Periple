import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RequireAuth } from './components';
import { DashboardScreen, FilesScreen, LoginScreen, ProfileScreen, RegisterScreen } from './pages';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path='/' element={<DashboardScreen />} />
        <Route path='/profile' element={<ProfileScreen />} />
        <Route path='/files' element={<FilesScreen />} />
      </Route>
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
    </Routes>
  );
}

export default App;
