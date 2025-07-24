import './App.css'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import CourseCard from '../Components/CourseCard'
import MySchedule from '../Pages/MySchedule'
import UpComingSessions from '../Pages/UpComingSessions'
import EnrolledCourses from '../Pages/EnrolledCourses'
import Instructor from '../Pages/Instructor'
import Testimonials from '../Pages/Testimonials'
import Faqs from '../Pages/Faqs'


function App() {
  return (
    <div className='bg-[#E9C3DC]'>
      <Navbar />
      <Home />
      <Categories />
      <CourseCard />
      <EnrolledCourses />
      <MySchedule />
      <UpComingSessions/>
      <Instructor />
      <Testimonials />
      <Faqs />
      </div>
  )
}

export default App
