import { create } from "zustand"

interface SignUpFormState {
  email: string
  password: string
  repeatPassword: string
  error: string
}

interface SignUpFormActions {
  updateEmail: (email: string) => void
  updatePassword: (password: string) => void
  updateRepeatPassword: (repeatPassword: string) => void
  setError: (error: string) => void
  clearError: () => void
  resetForm: () => void
}

export const useSignUpFormStore = create<SignUpFormState & SignUpFormActions>(
  (set) => ({
    email: "",
    password: "",
    repeatPassword: "",
    error: "",

    updateEmail: (email) => set({ email }),
    updatePassword: (password) => set({ password }),
    updateRepeatPassword: (repeatPassword) => set({ repeatPassword }),
    setError: (error) => set({ error }),
    clearError: () => set({ error: "" }),
    resetForm: () =>
      set({ email: "", password: "", repeatPassword: "", error: "" }),
  })
)
