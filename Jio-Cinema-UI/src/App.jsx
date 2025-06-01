import { BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/home' element={<Home/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
