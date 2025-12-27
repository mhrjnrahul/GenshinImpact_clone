import React from 'react'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App