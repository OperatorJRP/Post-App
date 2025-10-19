import { create } from "zustand"

interface SignInFormState {
  email: string
  password: string
  error: string
}

interface SignInFormActions {
  updateEmail: (email: string) => void
  updatePassword: (password: string) => void
  setError: (error: string) => void
  clearError: () => void
  resetForm: () => void
}

export const useSignInFormStore = create<SignInFormState & SignInFormActions>(
  (set) => ({
    email: "",
    password: "",
    error: "",

    updateEmail: (email) => set({ email }),
    updatePassword: (password) => set({ password }),
    setError: (error) => set({ error }),
    clearError: () => set({ error: "" }),
    resetForm: () => set({ email: "", password: "", error: "" }),
  })
)
