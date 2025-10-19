import { usePostStore } from "../../stores/postStore"
import { useAuthStore } from "../../stores/authStore"
import { useModalStore } from "../../stores/modalStore"
import { showNotImplementedAlert } from "../../utils/helpers"
import "./PostEditor.css"
import EmojiSmileIcon from "../../assets/emoji-smile.svg"
import PlusIcon from "../../assets/plus.svg"
import MicIcon from "../../assets/mic.svg"
import SendIcon from "../../assets/send.svg"
import CameraIcon from "../../assets/video-camera.svg"
import TrashIcon from "../../assets/trash.svg"
import BoldIcon from "../../assets/text-bold.svg"
import ItalicIcon from "../../assets/text-italic.svg"
import UnderlineIcon from "../../assets/text-underline.svg"
import ListOrderedIcon from "../../assets/list-ordered.svg"
import ListUnorderedIcon from "../../assets/list-unordered.svg"
import QuoteIcon from "../../assets/quotes.svg"
import ScriptIcon from "../../assets/script.svg"

const PostEditor = () => {
  const { createPost, postContent, updatePostContent, clearPostContent } =
    usePostStore()
  const { isAuthenticated } = useAuthStore()
  const { openSignInModal } = useModalStore()

  const handlePublish = () => {
    if (!isAuthenticated) {
      openSignInModal()
      return
    }
    if (postContent.trim()) {
      createPost(postContent.trim())
      clearPostContent()
    }
  }

  const handleNotImplemented = () => {
    if (!isAuthenticated) {
      openSignInModal()
      return
    }
    showNotImplementedAlert("This feature")
  }


  return (
    <div className="post-editor">
      <div className="editor-container">
        <div className="editor-header">
          <div className="editor-header-left">
            <div className="editor-format-select">
              Paragraph
            </div>
            <div className="editor-format-icons">
              <div className="bold-icon" onClick={handleNotImplemented}>
                <img
                  src={BoldIcon}
                  alt="Bold"
                  className="editor-action-icon "
                />
              </div>
              <img
                src={ItalicIcon}
                alt="Italic"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
              <img
                src={UnderlineIcon}
                alt="Underline"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
              <img
                src={ListOrderedIcon}
                alt="List Ordered"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
              <img
                src={ListUnorderedIcon}
                alt="List Unordered"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
              <img
                src={QuoteIcon}
                alt="Quote"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
              <img
                src={ScriptIcon}
                alt="Script"
                className="editor-action-icon"
                onClick={handleNotImplemented}
              />
            </div>
          </div>
          <div onClick={handleNotImplemented} className="trash-icon">
            <img src={TrashIcon} alt="Trash" className="editor-action-icon" />
          </div>
        </div>
        <div className="editor-content">
          <img src={EmojiSmileIcon} alt="Emoji Smile" className="emoji-icon" />
          <textarea
            value={postContent}
            onChange={(e) => updatePostContent(e.target.value)}
            placeholder="How are you feeling today?"
            className="post-input"
          />
        </div>
        <div className="action-icons-container">
          <div className="action-icons-left">
            <div className="plus-icon" onClick={handleNotImplemented}>
              <img src={PlusIcon} alt="Plus" className="editor-action-icon" />
            </div>

            <img
              onClick={handleNotImplemented}
              src={MicIcon}
              alt="Mic"
              className="editor-action-icon"
            />

            <img
              onClick={handleNotImplemented}
              src={CameraIcon}
              alt="Camera"
              className="editor-action-icon"
            />
          </div>

          <img
            onClick={handlePublish}
            src={SendIcon}
            alt="Send"
            className="editor-action-icon"
          />
        </div>
      </div>
    </div>
  )
}

export default PostEditor
