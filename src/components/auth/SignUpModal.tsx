import SignUpForm from "./SignUpForm"
import "./AuthModal.css"

const SignUpModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <SignUpForm isModal={true} />
      </div>
    </div>
  )
}

export default SignUpModal
