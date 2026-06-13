import { Routes, Route } from 'react-router-dom'
import { Ecosystem, Intro } from './_root'


function App() {
  return (
    <>
    <Routes >
      {/**private routes */}

      {/**Public routes */}
      <Route path="/" element={<Intro />} />
      <Route path='/ecosystem' element={<Ecosystem/>} />
    </Routes>
    </>
  )
}

export default App