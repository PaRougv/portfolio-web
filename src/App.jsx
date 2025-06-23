import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Homepage } from './pages/Homepage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
