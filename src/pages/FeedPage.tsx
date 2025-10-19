import { useAuthStore } from "../stores/authStore"
import { usePostStore } from "../stores/postStore"
import { useModalStore } from "../stores/modalStore"
import Header from "../components/ui/Header"
import PostEditor from "../components/feed/PostEditor"
import PostCard from "../components/feed/PostCard"
import SignInModal from "../components/auth/SignInModal"
import SignUpModal from "../components/auth/SignUpModal"
import "./FeedPage.css"

const FeedPage = () => {
  const { isAuthenticated } = useAuthStore()
  const { posts } = usePostStore()
  const { isSignInModalOpen, isSignUpModalOpen, openSignInModal } =
    useModalStore()

  const handleFeedClick = () => {
    if (!isAuthenticated) {
      openSignInModal()
    }
  }

  return (
    <div className="feed-page">
      <Header />

      <main className="feed-main" onClick={handleFeedClick}>
        <div className="feed-container">
          <PostEditor />

          <div className="posts-list">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      {isSignInModalOpen && <SignInModal />}
      {isSignUpModalOpen && <SignUpModal />}
    </div>
  )
}

export default FeedPage
