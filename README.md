# Feed App

A modern social media feed application built with React, TypeScript, and Vite. Features authentication flow, post creation, and interactive feed with a clean, responsive UI.

## 🚀 Features

- **Authentication System**: Sign in/Sign up with modal and dedicated pages
- **Post Creation**: Create and publish posts with rich text editor
- **Interactive Feed**: Like, comment, and share posts
- **Responsive Design**: Works seamlessly on desktop and mobile
- **State Management**: Clean state management with Zustand
- **TypeScript**: Full type safety throughout the application
- **Modern UI**: Clean, modern interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **State Management**: Zustand
- **Routing**: React Router DOM
- **Styling**: CSS3 with modular approach
- **Code Quality**: ESLint, Prettier

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd feed-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🏗️ Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   │   ├── SignInForm.tsx
│   │   ├── SignInModal.tsx
│   │   ├── SignUpForm.tsx
│   │   ├── SignUpModal.tsx
│   │   ├── AuthForm.css
│   │   └── AuthModal.css
│   ├── feed/           # Feed components
│   │   ├── PostCard.tsx
│   │   ├── PostEditor.tsx
│   │   ├── PostCard.css
│   │   └── PostEditor.css
│   └── ui/             # Reusable UI components
│       ├── Header.tsx
│       └── Header.css
├── pages/              # Page components
│   ├── FeedPage.tsx
│   ├── SignInPage.tsx
│   ├── SignUpPage.tsx
│   ├── FeedPage.css
│   └── AuthPage.css
├── stores/             # Zustand stores
│   ├── authStore.ts
│   ├── postStore.ts
│   ├── modalStore.ts
│   ├── signInFormStore.ts
│   └── signUpFormStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── helpers.ts
├── assets/             # Static assets
│   └── *.svg
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## 🔐 Authentication

The app includes a complete authentication system with:

### Test Accounts
- **Email**: `demo@example.com` | **Password**: `password123`
- **Email**: `test@user.com` | **Password**: `testpass`

### Authentication Flow
1. **Unauthenticated users**: Any interaction on the feed triggers sign-in modal
2. **Header Login**: Click "Login" to navigate to dedicated sign-in page
3. **Cross-navigation**: Switch between sign-in and sign-up pages
4. **Persistent sessions**: User sessions are maintained using localStorage

## 📱 User Interface

### Feed Page
- **Post Editor**: Create new posts with formatting options
- **Feed Display**: View posts with user avatars, timestamps, and reactions
- **Interactive Elements**: Like, comment, and share buttons
- **Authentication Guards**: Unauthenticated interactions trigger sign-in modal

### Authentication Pages
- **Sign In Page**: Dedicated sign-in form with navigation to sign-up
- **Sign Up Page**: Registration form with password confirmation
- **Modals**: Overlay authentication forms for quick access

## 🎨 Design System

### Colors
- **Primary**: Dark theme with `#222222` background
- **Secondary**: Light gray `#f5f5f5` for cards
- **Accent**: Gradient buttons with `#667eea` to `#764ba2`
- **Text**: Dark gray `#333` for readability

### Typography
- **Font Family**: System fonts (San Francisco, Segoe UI, etc.)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Cards**: Rounded corners (16px-30px), subtle shadows
- **Buttons**: Consistent sizing (48px height), hover effects
- **Icons**: SVG assets with hover states

## 🔧 State Management

### Zustand Stores

#### AuthStore
- User authentication state
- Sign in/up functionality
- Session persistence

#### PostStore
- Post creation and management
- Post content state
- LocalStorage persistence

#### ModalStore
- Modal visibility state
- Sign-in/sign-up modal controls

#### Form Stores
- **SignInFormStore**: Sign-in form state and validation
- **SignUpFormStore**: Sign-up form state and validation

## 📊 Data Persistence

- **Posts**: Stored in localStorage with automatic loading/saving
- **User Sessions**: Maintained across browser sessions
- **Form State**: Managed by dedicated Zustand stores

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Environment Variables
No environment variables required for basic functionality.

---

**Note**: This is a frontend-only application. No backend API is required for basic functionality as it uses localStorage for data persistence.