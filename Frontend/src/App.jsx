import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './Student'
import Create from './Create'
import Update from './Update'

import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Student/>}></Route>
          <Route path="/create" element ={<Create/>}></Route>
          <Route path="/update/:id" element ={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
