import React from 'react'
import { FaBookOpen } from 'react-icons/fa'

const MySchedule = () => {
  const scheduleItems = [
    {
      time: "9AM",
      title: "Introduction to C++",
      duration: "1h 30min",
      top: "mt-[40px]"
    },
    {
      time: "12PM",
      title: "Introduction to Python",
      duration: "1h 30min",
      top: "mt-[40px]"
    },
    {
      time: "3PM",
      title: "Professional Practices",
      duration: "1h 30min",
      top: "mt-[40px]"
    },
    {
      time: "9PM",
      title: "Introduction to Javascript",
      duration: "1h 30min",
      top: "mt-[40px]"
    }
  ]
  return (
    <div className='p-6 text-pink-200 rounded-lg w-[700px] mx-auto'>
      <h2 className='text-xl font-bold text-gray-900'>My Schedule</h2>
      <div className='flex justify-between items-center mb-4'>
      <button className='text-sm text-gray-700 hover:underline'>Add Class +</button>
    </div>

    <p className='text-gray-800 font-semibold mb-4'>Thursday</p>

    <div className='relative pl-6'>
      {Array.from({length:12}, (i) =>(
        <div 
        key ={i}
        className='h-12 text-sm text-pink-900 flex items-start justify-start relative'>
          {8 + i} {i===0 ? 'AM' : i + 8 >= 12 ? 'PM':'AM'}
          <hr className='absolute w-full left-0 border-t border-pink-300 top-6'/>
        </div>
      ))}

      {scheduleItems.map((item,index) =>
      <div 
      key={index}
      className={`absolute left-24 ${item.top} bg-[#B04587] text-white px-4 py-2
       rounded-full flex items-center gap-2`}>
        <FaBookOpen />
         <div className="text-sm">
              <div className="font-semibold">{item.title}</div>
              <div className="text-xs text-white/90">{item.duration}</div>
            </div>
          </div>
      )}
    </div>
    </div>
  )
}

export default MySchedule
