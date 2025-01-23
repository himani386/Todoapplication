
import './App.css'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import { Routes, Route } from "react-router";
import TodoPage from './pages/todo-page';


function App() {
  

  return (
    <>
      <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
      
      
    </>
  )
}

export default App
