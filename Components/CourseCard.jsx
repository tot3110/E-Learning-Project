import React from 'react';
import { FaRegClock, FaStar, FaHeart } from 'react-icons/fa';
import data from '../src/assets/datascience.png';
import effective from '../src/assets/effective.png';
import PopularedCourses from '../Pages/PopularedCourses';

const courses = [
  {
    title: 'Data Science Essentials',
    duration: '5hr 30min',
    rating: 4.9,
    image: data
  },
  {
    title: 'Effective Leadership Skills',
    duration: '2hr 30min',
    rating: 4.8,
    image: effective
  },
  {
    title: 'Effective Leadership Skills',
    duration: '2hr 30min',
    rating: 4.8,
    image: effective
  },
  {
    title: 'Effective Leadership Skills',
    duration: '2hr 30min',
    rating: 4.8,
    image: effective
  },
];

const CourseCard = () => {
  return (
    <div className='px-4 ]sm:px-8 md:px-16 pt-10'>
      <PopularedCourses heading="Populared Courses" />

      <div className='flex flex-wrap justify-center gap-6 p-5'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='bg-white shadow-lg rounded-3xl p-4 w-full max-w-xs sm:w-[260px]'
          >
            <img
              src={course.image}
              alt={course.title}
              className='rounded-xl w-full h-36 object-contain'
            />

            <div className='flex justify-between items-start mt-3 text-sm text-gray-600'>
              <h3 className='font-semibold text-gray-800'>{course.title}</h3>
              <FaHeart className='text-red-700 cursor-pointer' />
            </div>

            <div className='flex justify-between text-sm text-gray-600 mt-2'>
              <div className='flex items-center gap-1'>
                <FaRegClock />
                <span className='text-purple-500 font-semibold'>{course.duration}</span>
              </div>
              <div className='flex items-center gap-1'>
                <FaStar className='text-yellow-400' />
                <span className='font-semibold'>{course.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
