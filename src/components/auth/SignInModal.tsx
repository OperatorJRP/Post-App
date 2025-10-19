import SignInForm from "./SignInForm"
import "./AuthModal.css"

const SignInModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <SignInForm isModal={true} />
      </div>
    </div>
  )
}

export default SignInModal
