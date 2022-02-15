
import './App.css';
//import ScrollToTop from './helper/ScrollToTop';
//import { GlobalStyle } from "./components/common/styles/global";
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import About from './Pages/About/About'; 
import VisionMission from './Pages/Vision-Mission/vision-mission';
import HistoryPage from './Pages/History/History'; 
import Undergraduate from './Pages/Programmes/Undergraduate/Undergraduate';
import Postgraduate from './Pages/Programmes/Postgraduate/Postgraduate';
import Doctoral from './Pages/Programmes/Doctoral/Doctoral';
import { Route, Routes } from "react-router-dom";
import Placements from './Pages/Placements/Placements';
import AdmissionProcess from './Pages/Admission/Admission-Process/AdmissionProcess';
import EducationSystem from './Pages/Admission/Education-System/EducationSystem';
import FeeStructure from './Pages/Admission/Fee-Structure/FeeStructure';
import Hostels from './Pages/Admission/Hostels/Hostels';
import Scholarships from './Pages/Admission/Scholarships/Scholarships';
import Infrastructure from './Pages/Campus/Infrastructure/Infrastructure';
import Sports from './Pages/Campus/Sports/Sports';
import CommunityProgrames from './Pages/Campus/Community-Programes/CommunityProgrames';
import ContactUs from './Pages/ContactUs/ContactUs';
import Result from './components/Result';
import ComingSoon from './components/ComingSoon';
import SchoolDetail from './Pages/School-Programe/SchoolDetail';
import ProgrameDetails from './Pages/Programmes/ProgrameDetails';

function App() {
  return ( 
  <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/vission-mission" element={<VisionMission />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/undergraduate-programs" element={<Undergraduate />} />
        <Route path="/postgraduate-programs" element={<Postgraduate />} />
        <Route path="/doctoral-programs" element={<Doctoral />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/admission-process" element={<AdmissionProcess />} />
        <Route path="/our-education-system" element={<EducationSystem />} />
        <Route path="/shoolini-university-fee-structure" element={<FeeStructure />} />
        <Route path="/ghs-hostels" element={<Hostels />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/community-building-programmes" element={<CommunityProgrames />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/results" element={<Result />} />
        <Route path="/school-detail" element={<SchoolDetail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/programe-detail" element={ <ProgrameDetails />} /> 
  </Routes>
     
   
)
}

export default App;
