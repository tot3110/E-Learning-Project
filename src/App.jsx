import './App.css'
import Navbar from '../Components/Navbar'
import Home from '../Pages/Home'
import Categories from '../Pages/Categories'
import CourseCard from '../Components/CourseCard'
import MySchedule from '../Pages/MySchedule'
import UpComingSessions from '../Pages/UpComingSessions'


function App() {
  return (
    <div className='bg-[#E9C3DC]'>
      <Navbar />
      <Home />
      <Categories />
      <CourseCard />
      <MySchedule />
      <UpComingSessions/>
      </div>
  )
}

export default App

