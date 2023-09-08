import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import CounsellingQuizPage from './pages/CounsellingQuizPage';
import CounsellingResult from './pages/CounsellingResult';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import SkillApiTesting from './pages/SkillApiTesting';
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
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
