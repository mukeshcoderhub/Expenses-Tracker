import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddExpenses from './pages/AddExpenses'
import ViewExpenses from './pages/ViewExpenses'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addExpenses' element={<AddExpenses />} />
      <Route path='/viewExpenses' element={<ViewExpenses />} />
    </Routes>
    </>
  )
}

export default App