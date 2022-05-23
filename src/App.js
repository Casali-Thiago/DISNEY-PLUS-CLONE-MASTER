import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import MainPage from './pages/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;