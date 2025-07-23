import React from 'react'
import { FaBookOpen } from 'react-icons/fa'

const MySchedule = () => {
  const scheduleItems = [
    {
      time: 9,
      title: "Introduction to C++",
      duration: "1h 30min",
      // top: "mt-[40px]"
    },
    {
      time: 12,
      title: "Introduction to Python",
      duration: "1h 30min",
      // top: "mt-[40px]"
    },
    {
      time: 15,
      title: "Professional Practices",
      duration: "1h 30min",
      // top: "mt-[40px]"
    },
  ]

  return (
    <div className='p-6 rounded-lg w-[700px] mx-auto'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-bold text-3xl p-10 text-center'>My Schedule</h2>
      <button className='text-sm text-gray-700 hover:underline'>Add Class +</button>
    </div>

    <p className='text-gray-800 font-semibold mb-4'>Thursday</p>

    <div className='relative pl-6'>
      {Array.from({length:12}, (index,i) =>(
        <div 
        key ={i}
        className='h-12 text-sm text-pink-900 flex items-start justify-start relative'>
          {i<5 ? 8 + i: i-4} {i===0 ? 'AM' : i + 8 >= 12 ? 'PM':'AM'}
          {/* {console.log(i)} */}

          {scheduleItems.map((item,index) =>{
            {console.log(item.time,i +8)}
          if(item.time === i+8){
            return(<div 
              key={index}
              className={`absolute left-24 z-25 bg-[#B04587] text-white px-4 py-2
              rounded-full flex items-center gap-2`}>
              <FaBookOpen />
              <div className="text-sm">
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs text-white/90">{item.duration}</div>
              </div>
          </div>)
          }}
      )}
      <hr className='absolute z-20 w-full left-0 border-t border-pink-300 top-6'/>
        </div>
        
      ))}
    </div>
    </div>
  )
}

export default MySchedule


