import React from 'react'
import Sidebar from '../components/Sidebar'
import StoriesSection from '../components/StoriesSection'
import PostsSection from '../components/PostsSection'

const HomePage = () => {
  return (
    <div className="flex lg:flex-row h-full md:w-4/5 lg:w-3/4 mx-auto">
        <div className="flex flex-col w-full lg:w-2/3 sm:mt-6 sm:px-8 mb-8">
            <div className="flex flex-col w-full 2xl:w-2/3 sm:mt-6 sm:px-8 mb-8">
                <StoriesSection/>
                <PostsSection/>
            </div>
        </div>
        <Sidebar/>
    </div>
  )
}

export default HomePage