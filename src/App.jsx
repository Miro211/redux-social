import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { UsersPage } from './Pages/Users/UsersPage'
import './App.css'
import Layout from './Components/Layout/Layout'
import { UserInfo } from './Pages/User/User'

function App() {

  return (
    <div> 
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/users/:id' element = {<UserInfo/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App