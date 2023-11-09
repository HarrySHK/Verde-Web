import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import DocLogin from './components/DocLogin/DocLogin'
import DocSchedules from './components/DocSchedules/DocSchedules'
import Login from './components/login/login'
import Navbar from './components/navbar/Navbar'
import Register from './components/register/register'
import Doc_Dashboard from './components/Dashboards/DocDashBoard'
import DoctorRegister from './components/DoctorSignUp/DoctorSignUp'
import Show_All_Doctor from './Show/Data'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'
import Account from './pages/Account'


function App() {
  return (
    <div className="">
      <Router>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/DocLogin" element={<DocLogin />} />
          <Route path="/DocRegister" element={<DoctorRegister/>} />
          <Route path="/DocScheduleSlot" element={<DocSchedules />} />
          <Route path="/DocDash" element={<Doc_Dashboard/>} />
           <Route path='/ShowDocs' element={<Show_All_Doctor/>}/>
           <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            /> 
        </Routes>
        </AuthContextProvider>
      </Router>
    </div>
  )
}

export default App
