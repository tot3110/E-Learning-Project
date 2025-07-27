import React from 'react';
import Vector5 from '../src/assets/Vector5.png';
import Vector1 from '../src/assets/Vector1.png';
import Vector2 from '../src/assets/Vector2.png';
import Vector3 from '../src/assets/Vector3.png';
import PopularedCourses from './PopularedCourses';

const Categories = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-20 pt-10">
      <PopularedCourses heading="Categories" />
      {/* <h2 className="font-bold text-3xl md:pl-20 pt-7 pb-1 text-start">Categories</h2> */}

      <div className="flex flex-wrap gap-6 justify-center p-5">
        <button className="flex items-center gap-3 bg-[#6E415E] text-white rounded-full py-2 px-4 sm:px-6 text-base sm:text-xl font-semibold">
          <img src={Vector5} alt="Design" className="bg-white rounded-full h-8 sm:h-10 p-1" />
          Design
        </button>

        <button className="flex items-center gap-3 bg-[#6E415E] text-white rounded-full py-2 px-4 sm:px-6 text-base sm:text-xl font-semibold">
          <img src={Vector1} alt="Business" className="bg-white rounded-full h-8 sm:h-10 p-1" />
          Business
        </button>

        <button className="flex items-center gap-3 bg-[#6E415E] text-white rounded-full py-2 px-4 sm:px-6 text-base sm:text-xl font-semibold">
          <img src={Vector2} alt="Maths" className="bg-white rounded-full h-8 sm:h-10 p-1" />
          Maths
        </button>

        <button className="flex items-center gap-3 bg-[#6E415E] text-white rounded-full py-2 px-4 sm:px-6 text-base sm:text-xl font-semibold">
          <img src={Vector3} alt="Arts" className="bg-white rounded-full h-8 sm:h-10 p-1" />
          Arts
        </button>
      </div>
    </div>
  );
};

export default Categories;
