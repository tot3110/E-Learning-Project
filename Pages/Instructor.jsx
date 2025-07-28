import React, { useState } from 'react';
import pic from '../src/assets/instructor.png';
import pic2 from '../src/assets/instructor1.png';
import pic3 from '../src/assets/intructor3.jpg';
import background from '../src/assets/blur bg.png';
import background1 from '../src/assets/blur bg - Copy.png';
import background2 from '../src/assets/blur bg - Copy (2).png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const instructors = [
  {
    pic: pic,
    bg: background,
    name: 'Isabella Clark',
    role: 'App Developer',
  },
  {
    pic: pic2,
    bg: background1,
    name: 'Ava Collins',
    role: 'Web Developer',
  },
  {
    pic: pic3,
    bg: background2,
    name: 'Isabella Clark',
    role: 'IELTS/Toefl',
  },
];

const InstructorCard = ({ instructor }) => (
  <div className="relative flex flex-col items-center gap-3 w-full max-w-xs">
    <img src={instructor.bg} className="w-72 h-72 sm:w-80 sm:h-80 rounded-full" />
    <img
      src={instructor.pic}
      className="w-55 h-55 rounded-full absolute top-11 left-40 transform -translate-x-1/2"
    />
    <p className="font-semibold text-gray-900 text-xl sm:text-2xl mt-5 text-center">{instructor.name}</p>
    <p className="text-gray-900 text-sm sm:text-base text-center">{instructor.role}</p>
  </div>
);

const Instructor = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < instructors.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="pb-10">
      <h2 className="font-bold text-3xl pt-10 pb-5 text-start pl-6 lg:pl-40">Instructor Profiles</h2>

      
      <div className="flex flex-col lg:hidden items-center">
        <InstructorCard instructor={instructors[index]} />
        <div className="flex gap-5 mt-4">
          <button onClick={prev} disabled={index === 0}>
            <FaArrowLeft className={`text-2xl ${index === 0 ? 'text-gray-400' : 'text-gray-700'}`} />
          </button>
          <button onClick={next} disabled={index === instructors.length - 1}>
            <FaArrowRight className={`text-2xl ${index === instructors.length - 1 ? 'text-gray-400' : 'text-gray-700'}`} />
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-10 pt-10">
        {instructors.map((instructor, i) => (
          <InstructorCard key={i} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default Instructor;
