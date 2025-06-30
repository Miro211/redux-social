import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { UsersPage } from './Pages/Users/UsersPage'
import './App.css'
import Layout from './Components/Layout/Layout'
import { UserInfo } from './Pages/User/User'
import Profile from './Pages/Profile/Profile'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { loginThunk } from './Store/Reducers/authReducer'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const savedUserId = localStorage.getItem('userId')
    if(savedUserId) {
      dispatch(loginThunk(savedUserId))
    }
  },[])
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element = {<UserInfo/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App