export interface User {
  id: string
  email: string
  username: string
  avatar?: string
}

export interface Post {
  id: string
  content: string
  author: User
  createdAt: Date
  reaction?: string
  likes: number
  comments: number
  shares: number
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface SignUpCredentials extends AuthCredentials {
  repeatPassword: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface AuthActions {
  signIn: (credentials: AuthCredentials) => Promise<boolean>
  signUp: (credentials: SignUpCredentials) => Promise<boolean>
  signOut: () => void
  checkAuth: () => void
}

export interface PostState {
  posts: Post[]
  isLoading: boolean
}

export interface PostActions {
  createPost: (content: string) => void
}

export interface ModalState {
  isSignInModalOpen: boolean
  isSignUpModalOpen: boolean
}

export interface ModalActions {
  openSignInModal: () => void
  openSignUpModal: () => void
  closeModals: () => void
}
