import {Route,BrowserRouter,Routes} from 'react-router-dom'
import HomeScreen from './Pages/HomeScreen'
import FindData from './Pages/FindData'
import Register from './Pages/Register'
import Header from './Components/Header'
import Services from './Pages/Services'
import About from './Pages/About'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<FindData/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
