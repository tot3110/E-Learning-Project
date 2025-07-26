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
import Footer from '../Components/Footer'
import PopularedCourses from '../Pages/PopularedCourses'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='bg-gradient-to-b from-[#E9C3DC] to-[#6E415E]'>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/popularcourses" element={<PopularedCourses />} />
          <Route path="/enrolledcourses" element={<EnrolledCourses />} />
          <Route path="/myschedule" element={<MySchedule />} />
          <Route path="/upcomingsessions" element={<UpComingSessions />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/testimonials" element={<Testimonials />}/>
          <Route path="/faqs" element={<Faqs />}/>
        </Routes>
      </Router> */}
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
      <Footer />
      </div>
  )
}

export default App
