import {Route,BrowserRouter,Routes, Navigate, RouteProps} from 'react-router-dom'
import FindData from './Pages/FindData'
import Register from './Pages/Register'
import Login from './Pages/Login'

const isAuthenticated=()=>{
  const token = localStorage.getItem('token')
  return !!token
}


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<FindData/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
