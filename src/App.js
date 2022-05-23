import './App.css';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import MainPage from './pages/index.js'
import Detail from './components/Detail'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="details" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;