import {Routes, Route, Navigate} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import Jobs from './components/Jobs'

import JobItemDetails from './components/JobItemDetails'
import Profile from './components/Profile'

import NotFound from './components/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Replace your code here

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobItemDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/Not-Found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/Not-Found" />} />
    </Routes>
  )
}

export default App
