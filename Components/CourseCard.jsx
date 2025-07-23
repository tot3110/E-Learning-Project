import React from 'react';
import { FaRegClock, FaStar, FaHeart } from 'react-icons/fa';
import data from '../src/assets/datascience.png'
import EnrolledCourses from '../Pages/PopularedCourses';
import effective from '../src/assets/effective.png'
import PopularedCourses from '../Pages/PopularedCourses';

const CourseCard = () => {
  return (
    <div>
    <PopularedCourses />
    <div className='flex items-center justify-center gap-10 p-10'>
    <div className="bg-white rounded-3xl shadow-lg p-4 w-64">
      <img
        src={data}
        className="rounded-xl w-full h-36 object-contain"
      />
      <div className="flex justify-between items-start mt-3">
        <h3 className="text-md font-semibold text-gray-800">Data Science Essentials</h3>
        <FaHeart className="mt-1 cursor-pointer text-red-700" />
      </div>

      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <div className="flex items-center gap-1">
          <FaRegClock />
          <span className="text-purple-500 font-semibold">5hr 30min</span>
        </div>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="font-semibold">4.9</span>
        </div>
      </div>
    </div>

    <div className='bg-white shadow-lg rounded-3xl p-4 w-64'>
        <img src={effective}
        className='rounded-xl w-full h-36 object-contain' />
        <div className='flex justify-between text-sm text-gray-600 mt-2'>
            <h3 className='text-md font-semibold text-gray-800'>Effecvtive Leadership Skills</h3>
            <FaHeart className='mt-1 cursor-pointer text-red-700'/>
        </div>
        <div className='flex items-center gap-1'>
            <FaRegClock />
            <span className='font-semibold text-purple-500'>2hr 30min</span>
        </div>

        <div className='flex items-center gap-1'>
            <FaStar className='text-yellow-400' />
            <span className='font-semibold'>4.8</span>
        </div>
    </div>
    <div className='bg-white shadow-lg rounded-3xl p-4 w-64'>
        <img src={effective}
        className='rounded-xl w-full h-36 object-contain' />
        <div className='flex justify-between text-sm text-gray-600 mt-2'>
            <h3 className='text-md font-semibold text-gray-800'>Effecvtive Leadership Skills</h3>
            <FaHeart className='mt-1 cursor-pointer text-red-700'/>
        </div>
        <div className='flex items-center gap-1'>
            <FaRegClock />
            <span className='font-semibold text-purple-500'>2hr 30min</span>
        </div>

        <div className='flex items-center gap-1'>
            <FaStar className='text-yellow-400' />
            <span className='font-semibold'>4.8</span>
        </div>
    </div>
    <div className='bg-white shadow-lg rounded-3xl p-4 w-64'>
        <img src={effective}
        className='rounded-xl w-full h-36 object-contain' />
        <div className='flex justify-between text-sm text-gray-600 mt-2'>
            <h3 className='text-md font-semibold text-gray-800'>Effecvtive Leadership Skills</h3>
            <FaHeart className='mt-1 cursor-pointer text-red-700'/>
        </div>
        <div className='flex items-center gap-1'>
            <FaRegClock />
            <span className='font-semibold text-purple-500'>2hr 30min</span>
        </div>

        <div className='flex items-center gap-1'>
            <FaStar className='text-yellow-400' />
            <span className='font-semibold'>4.8</span>
        </div>
    </div>
    </div>
    </div>
  );
};

export default CourseCard;
