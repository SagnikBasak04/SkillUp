// import LoginRegister from './Components/Login_Register/LoginRegister';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login_Register/Login';
import LandingPage from './Components/LandingPage/LandingPage';

import ForgotPassword from './Components/Login_Register/ForgotPassword';
import Register from './Components/Login_Register/Register';
import MentorSkillSwap from './Components/Mentor/MentorSkillSwap';
import MentoredCourses from './Components/SkillSwapper/MentoredCourses';
import SwapSkillsLandingPage from './Components/SkillSwapper/SwapSkillsLandingPage';
import CreateCourse from './Components/Mentor/createCourse';
import CreateSwap from './Components/SkillSwapper/createSwap';
import JoinSwap from './Components/SkillSwapper/joinSwap';
import UserProfile from './Components/SkillSwapper/userProfile';
import MentorProfile from './Components/Mentor/mentorProfile';
import ViewMySwaps from './Components/SkillSwapper/viewMySwaps';
import { useAuthContext } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';

function App() {
  const { authUser } = useAuthContext();
  console.log(authUser);

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/mentor-skill-swap' element={<MentorSkillSwap />} />
        <Route path='/skillSwap' element={<SwapSkillsLandingPage />} />
        <Route path='/mentored-courses' element={<MentoredCourses />} />
        <Route path='/create-courses' element={<CreateCourse />} />
        <Route path='/create-swap' element={<CreateSwap />} />
        <Route path='/join-swap' element={<JoinSwap />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/mentor-profile' element={<MentorProfile />} />
        <Route path='/view-swap' element={<ViewMySwaps />} />
      </Routes>
      
      <Toaster />
    </div>
  );
}

export default App;
