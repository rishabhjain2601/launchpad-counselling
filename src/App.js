import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CounsellingQuizPage from './pages/CounsellingQuizPage';
import CounsellingResult from './pages/CounsellingResult';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import SkillApiTesting from './pages/SkillApiTesting';
import QuesType1 from './components/QuesType1';
import QuesType2 from './components/QuesType2';
import QuesType3 from './components/QuesType3';
import CareerQuiz from './pages/CareerQuiz';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>{/*Layout ke andar header, footer hai */}
            <Route index element={<Home />} />
            <Route path="/counselling-quiz" index element= {<CounsellingQuizPage />} />
            <Route path="/counselling-result" index element= {<CounsellingResult />} />
            <Route path="/chatbot" index element= {<Chatbot />} />
            <Route path="/skill-api-testing" index element= {<SkillApiTesting />} />
            <Route path="/q1" index element= {<QuesType1 />} />
            <Route path="/q2" index element= {<QuesType2 />} />
            <Route path="/q3" index element= {<QuesType3 />} />
            <Route path="/quiz" index element= {<CareerQuiz />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
