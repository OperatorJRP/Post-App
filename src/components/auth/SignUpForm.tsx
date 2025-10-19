import { useAuthStore } from "../../stores/authStore"
import { useModalStore } from "../../stores/modalStore"
import { useSignUpFormStore } from "../../stores/signUpFormStore"
import { Link } from "react-router-dom"
import "./AuthForm.css"

interface AuthFormProps {
  isModal?: boolean
  onSuccess?: () => void
}

const SignUpForm = ({ isModal = false, onSuccess }: AuthFormProps) => {
  const { signUp, isLoading } = useAuthStore()
  const { closeModals, openSignInModal } = useModalStore()
  const {
    email,
    password,
    repeatPassword,
    error,
    updateEmail,
    updatePassword,
    updateRepeatPassword,
    setError,
    clearError,
  } = useSignUpFormStore()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()

    if (password !== repeatPassword) {
      setError("Passwords do not match")
      return
    }

    const success = await signUp({ email, password, repeatPassword })
    if (success) {
      if (isModal) {
        closeModals()
      } else if (onSuccess) {
        onSuccess()
      }
    } else {
      setError("Email already exists or invalid credentials")
    }
  }

  const handleSignInClick = () => {
    if (isModal) {
      closeModals()
      openSignInModal()
    }
  }

  return (
    <div
      className={`auth-form-container ${isModal ? "modal-form" : "page-form"}`}
    >
      <h1 className="auth-title">Create an account to continue</h1>
      <p className="auth-subtitle">
        Create an account to access all the features on this app
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

        <div className="form-group">
          <label htmlFor="repeatPassword">Repeat password</label>
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            value={repeatPassword}
            onChange={(e) => updateRepeatPassword(e.target.value)}
            placeholder="Enter your password again"
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <button type="submit" className="auth-button" disabled={isLoading}>
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <p className="auth-footer">
        Already have an account?{" "}
        {isModal ? (
          <span className="auth-link" onClick={handleSignInClick}>
            Sign In
          </span>
        ) : (
          <Link to="/signin" className="auth-link">
            Sign In
          </Link>
        )}
      </p>
    </div>
  )
}

export default SignUpForm
