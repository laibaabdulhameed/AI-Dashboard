import './Sidebar.css';
import { Link } from 'react-router-dom';
import { Home, CheckSquare, BookOpen, Target, MessageCircle, Settings } from 'lucide-react';
export default function Sidebar({isOpen}) {
    return (
        <div className="main-div" style={{display:isOpen? "block" : "none"}}>
              <ul className='features-list'>
                <li><Link to="/home"><Home size={18}/>Home</Link></li>
                <li><Link to="/tasks"><CheckSquare size={18}/>Tasks</Link></li>
                <li><Link to="/journals"> <BookOpen size={18}/>journals</Link></li>
                <li><Link to="/habit-tracker"><Target size={18}/>Habit Tracker</Link></li>
                <li><Link to="/settings"><Settings size={18}/>Settings</Link></li>
              </ul>
        </div>
       

    )}