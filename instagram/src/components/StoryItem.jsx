import React from 'react'

const StoryItem = () => {
  return (
    <div className="flex flex-col justify-center items-center p-2 space-y-0.5 cursor-pointer">
        <div className="w-16 p-0.5 h-full rounded-full border-2 border-red-500">
        <img className="rounded-full border border-gray-300 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaLyIiqSET1Z7Ati_tE8qOXqsYp_vC7zBjEf7EtLQ7w&s" draggable="false" alt=""/>
        </div>
        <span className="text-xs">the_vikas</span>
    </div>
  )
}

export default StoryItem