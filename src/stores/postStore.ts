import { create } from "zustand"
import type { Post } from "../types"
import { useAuthStore } from "./authStore"

const DEMO_POSTS: Post[] = [
  {
    id: "1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      id: "theresa",
      email: "theresa@example.com",
      username: "Theresa Webb",
      avatar: "https://ui-avatars.com/api/?name=Theresa+Webb&background=random",
    },
    createdAt: new Date(Date.now() - 5 * 60 * 1000),
    reaction: "😟",
    likes: 12,
    comments: 3,
    shares: 1,
  },
  {
    id: "2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      id: "john",
      email: "john@example.com",
      username: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
    },
    createdAt: new Date(Date.now() - 15 * 60 * 1000),
    reaction: "✌️",
    likes: 8,
    comments: 2,
    shares: 0,
  },
  {
    id: "3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: {
      id: "jane",
      email: "jane@example.com",
      username: "Jane Doe",
      avatar: "https://ui-avatars.com/api/?name=Jane+Doe&background=random",
    },
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
    reaction: "💀",
    likes: 5,
    comments: 1,
    shares: 2,
  },
]

// Load posts from localStorage or use demo posts
const loadPostsFromStorage = (): Post[] => {
  try {
    const storedPosts = localStorage.getItem("feed-posts")
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts)
      // Convert createdAt strings back to Date objects
      return parsedPosts.map((post: Post & { createdAt: string }) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }))
    }
  } catch (error) {
    console.error("Error loading posts from localStorage:", error)
  }
  return DEMO_POSTS
}

// Save posts to localStorage
const savePostsToStorage = (posts: Post[]) => {
  try {
    localStorage.setItem("feed-posts", JSON.stringify(posts))
  } catch (error) {
    console.error("Error saving posts to localStorage:", error)
  }
}

interface PostStoreState {
  posts: Post[]
  postContent: string
  isLoading: boolean
}

interface PostStoreActions {
  createPost: (content: string) => void
  updatePostContent: (content: string) => void
  clearPostContent: () => void
}

export const usePostStore = create<PostStoreState & PostStoreActions>(
  (set, get) => ({
    posts: loadPostsFromStorage(),
    postContent: "",
    isLoading: false,

    createPost: (content: string) => {
      const { user } = useAuthStore.getState()
      if (!user) return

      const newPost: Post = {
        id: Date.now().toString(),
        content,
        author: user,
        createdAt: new Date(),
        likes: 0,
        comments: 0,
        shares: 0,
        reaction: "💀",
      }

      const updatedPosts = [newPost, ...get().posts]
      set({ posts: updatedPosts })
      savePostsToStorage(updatedPosts)
    },

    updatePostContent: (content) => set({ postContent: content }),

    clearPostContent: () => set({ postContent: "" }),
  })
)
