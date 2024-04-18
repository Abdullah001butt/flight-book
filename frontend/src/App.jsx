import React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home'
import Layout from './components/Layout'
import Plan from './pages/Plan'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/plan' element={<Plan />} />
        </Route>
      </Routes>
    </div >
  )
}

export default App