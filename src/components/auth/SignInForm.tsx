import { useAuthStore } from "../../stores/authStore"
import { useModalStore } from "../../stores/modalStore"
import { useSignInFormStore } from "../../stores/signInFormStore"
import { Link } from "react-router-dom"
import "./AuthForm.css"

interface AuthFormProps {
  isModal?: boolean
  onSuccess?: () => void
}

const SignInForm = ({ isModal = false, onSuccess }: AuthFormProps) => {
  const { signIn, isLoading } = useAuthStore()
  const { closeModals, openSignUpModal } = useModalStore()
  const {
    email,
    password,
    error,
    updateEmail,
    updatePassword,
    setError,
    clearError,
  } = useSignInFormStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()

    const success = await signIn({ email, password })
    if (success) {
      if (isModal) {
        closeModals()
      } else if (onSuccess) {
        onSuccess()
      }
    } else {
      setError("Invalid email or password")
    }
  }

  const handleSignUpClick = () => {
    if (isModal) {
      closeModals()
      openSignUpModal()
    }
  }

  return (
    <div
      className={`auth-form-container ${isModal ? "modal-form" : "page-form"}`}
    >
      <h1 className="auth-title">Sign in to continue</h1>
      <p className="auth-subtitle">
        Sign in to access all the features on this app
      </p>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email or username</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => updateEmail(e.target.value)}
            placeholder="Enter your email or username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => updatePassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="auth-button" disabled={isLoading}>
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="auth-footer">
        Do not have an account?{" "}
        {isModal ? (
          <span className="auth-link" onClick={handleSignUpClick}>
            Sign Up
          </span>
        ) : (
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        )}
      </p>
    </div>
  )
}

export default SignInForm
