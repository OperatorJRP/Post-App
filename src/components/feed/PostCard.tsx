import { formatTimeAgo, showNotImplementedAlert } from "../../utils/helpers"
import { useAuthStore } from "../../stores/authStore"
import { useModalStore } from "../../stores/modalStore"
import type { Post } from "../../types"
import HeartIcon from "../../assets/heart.svg"
import CommentIcon from "../../assets/comment.svg"
import ShareIcon from "../../assets/share.svg"
import "./PostCard.css"

interface PostCardProps {
  post: Post
}

const PostCard = ({ post }: PostCardProps) => {
  const { isAuthenticated } = useAuthStore()
  const { openSignInModal } = useModalStore()

  const handleInteraction = () => {
    if (!isAuthenticated) {
      openSignInModal()
      return
    }
    showNotImplementedAlert("This feature")
  }

  return (
    <div className="post-card-container">
      <div className="post-card">
        <div className="post-user">
          <div className="post-user-info">
            <img
              src={post.author.avatar}
              alt={post.author.username}
              className="user-avatar"
            />
            {post.reaction && (
              <div className="post-reaction">
                <span className="reaction-text">{post.reaction}</span>
              </div>
            )}
          </div>
          <div className="user-info">
            <span className="username">{post.author.username}</span>
            <span className="post-time">{formatTimeAgo(post.createdAt)}</span>
            <div className="post-text">{post.content}</div>
          </div>
        </div>
      </div>
      <div className="post-actions">
        <img
          onClick={handleInteraction}
          src={HeartIcon}
          alt="Like"
          className="action-icon"
        />

        <img
          onClick={handleInteraction}
          src={CommentIcon}
          alt="Comment"
          className="action-icon"
        />

        <img
          onClick={handleInteraction}
          src={ShareIcon}
          alt="Share"
          className="action-icon"
        />
      </div>
    </div>
  )
}

export default PostCard
