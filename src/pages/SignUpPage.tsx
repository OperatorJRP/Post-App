import { useNavigate } from "react-router-dom"
import Header from "../components/ui/Header"
import SignUpForm from "../components/auth/SignUpForm"
import "./AuthPage.css"

const SignUpPage = () => {
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate("/")
  }

  return (
    <div className="auth-page">
      <Header />

      <div className="auth-container">
        <SignUpForm isModal={false} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

export default SignUpPage
