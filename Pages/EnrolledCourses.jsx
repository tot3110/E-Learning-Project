import React from 'react';
import effective from '../src/assets/effective.png';
import { FaRegClock, FaStar, FaHeart } from 'react-icons/fa';


const CourseCard = ({ title, duration, rating, image }) => (
  <div className='bg-white shadow-lg rounded-3xl p-4 w-64'>
    <img src={image} alt={title} className='rounded-xl w-full h-36 object-contain' />
    
    <div className='flex justify-between text-sm text-gray-600 mt-2'>
      <h3 className='text-md font-semibold text-gray-800'>{title}</h3>
      <FaHeart className='mt-1 cursor-pointer text-red-700' />
    </div>
    
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-1 pt-3'>
        <FaRegClock />
        <span className='font-semibold text-purple-500'>{duration}</span>
      </div>
      
      <div className='flex items-center pt-3 gap-1'>
        <FaStar className='text-yellow-400' />
        <span className='font-semibold'>{rating}</span>
      </div>
    </div>
  </div>
);


const EnrolledCourses = () => {
  const courses = [
    { title: 'Effective Leadership Skills', duration: '2hr 30min', rating: 4.8, image: effective },
    { title: 'Effective Leadership Skills', duration: '2hr 30min', rating: 4.8, image: effective },
    { title: 'Effective Leadership Skills', duration: '2hr 30min', rating: 4.8, image: effective },
    { title: 'Effective Leadership Skills', duration: '2hr 30min', rating: 4.8, image: effective }
  ];

  return (
    <div>
      <h2 className='font-bold text-3xl p-0 pb-1 text-start pl-40'>Enrolled Courses</h2>
      
      <div className='flex flex-wrap justify-center gap-10 pt-15'>
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;


