import React from 'react'
import StoryItem from './StoryItem'

const StoriesSection = () => {
  return (
    <div className="flex mb-8 bg-white border rounded">
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
        <StoryItem/>
    </div>
  )
}

export default StoriesSection