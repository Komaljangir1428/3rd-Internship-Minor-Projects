import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalendarView from './CalendarView';
import KanbanBoard from './KanbanBoard';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<CalendarView />} />
          <Route path='/kanban' element={<KanbanBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;