import './App.css'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import CourseCard from '../Components/CourseCard'
import EnrolledCourses from '../Pages/PopularedCourses'
import MySchedule from '../Pages/MySchedule'
import UpComingSessions from '../Pages/UpComingSessions'
import PopularedCourses from '../Pages/PopularedCourses'


function App() {
  return (
    <div className='bg-[#E9C3DC]'>
      <Navbar />
      <Home />
      <Categories />
      <CourseCard />
      <PopularedCourses />
      <MySchedule />
      <UpComingSessions/>
      </div>
  )
}

export default App


