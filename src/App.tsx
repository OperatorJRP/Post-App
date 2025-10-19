import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useAuthStore } from "./stores/authStore"
import FeedPage from "./pages/FeedPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import "./App.css"

const App = () => {
  const checkAuth = useAuthStore((state) => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
