import React from 'react'
import PostItem from './PostItem'

const PostsSection = () => {
  return (
    <div className="posts-container" id="post-container bg-gray-500">
         <PostItem/>
         <PostItem/>
         <PostItem/>
         <PostItem/>
         <PostItem/>
    </div>
  )
}

export default PostsSection