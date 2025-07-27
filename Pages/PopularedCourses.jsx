import React from 'react'

const PopularedCourses = ({heading}) => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-between items-center w-[1180px]'>
      <h2 className='font-bold text-3xl pt-2 pb-1 text-start'>{heading}</h2>

      {/* <button>See All</button> */}
    </div>
    </div>
  )
}

export default PopularedCourses
