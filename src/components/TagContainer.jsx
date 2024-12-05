import React from 'react'

function TagContainer({text}) {
  return (
    <div className='text-xs md:text-base text-dp bg-white rounded-full px-3 py-1 md:px-4 md:py-2'>
      {text}
    </div>
  )
}

export default TagContainer
