import './Sidebar.css';
import { Home, CheckSquare, BookOpen, Target, MessageCircle, Settings } from 'lucide-react';
export default function Sidebar({isOpen}) {
    return (
        <div className="main-div" style={{display:isOpen? "block" : "none"}}>
              <ul className='features-list'>
                <li><Home size={18}/>Home</li>
                <li><CheckSquare size={18}/>Tasks</li>
                <li><BookOpen size={18}/>journals</li>
                <li><Target size={18}/>Habit Tracker</li>
                <li><Settings size={18}/>Settings</li>
              </ul>
        </div>
       

    )}