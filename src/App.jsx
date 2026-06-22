import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TaskInput from './tasks/TaskInput';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App(){
  const [isOpen, setIsOpen] = useState(false);
  
  return(
    <Router>
       <Navbar username="Laiba" setIsOpen={setIsOpen} />
       <div className="layout">
       <Sidebar isOpen={isOpen}/>
       <main className="content">
          <Routes>
            <Route path='/tasks' element={<TaskInput/>} />
          </Routes>
       </main>

       </div>


     </Router>
  )
}