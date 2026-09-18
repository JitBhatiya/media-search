import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import CollectionPage from "./components/CollectionPage"
import Navbar from "./components/Navbar"
import {ToastContainer} from 'react-toastify'


const App = () => {

    return (
    <div className='min-h-screen text-white w-full bg-gray-950'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/collection' element={<CollectionPage />} />
      </Routes>

      <ToastContainer />
      
    </div>
  )
}

export default App