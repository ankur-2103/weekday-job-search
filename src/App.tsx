import './App.css';
import { Route, Routes } from 'react-router-dom';
import JobSearchApp from './modules/JobSearch/JobSearchApp';

function App() {
  return (
    <Routes>
      <Route path='' element={<JobSearchApp/>} />
    </Routes>
  );
}

export default App;
