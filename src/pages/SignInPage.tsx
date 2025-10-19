import { useNavigate } from "react-router-dom"
import Header from "../components/ui/Header"
import SignInForm from "../components/auth/SignInForm"
import "./AuthPage.css"

const SignInPage = () => {
  const navigate = useNavigate()

  const handleSuccess = () => {
    navigate("/")
  }

  return (
    <div className="auth-page">
      <Header />

      <div className="auth-container">
        <SignInForm isModal={false} onSuccess={handleSuccess} />
      </div>
    </div>
  )
}

export default SignInPage
