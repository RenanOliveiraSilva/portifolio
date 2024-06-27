import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'

import NavScrollExample from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <NavScrollExample />
      
      <Outlet />

    </>
  )
}

export default App
