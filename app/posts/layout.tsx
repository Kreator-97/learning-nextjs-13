import { FC } from 'react'

const PostsLayout: FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <div>
      <h1>Este es el layout de los posts</h1>
      { children }
    </div>
  )
}

export default PostsLayout
