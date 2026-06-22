import './Navbar.css';

import { Menu } from 'lucide-react';
export default function Navbar({ username , setIsOpen }) {
  
    return (
        <>
            <div className="nav">
                <div className='hamburgur' onClick={()=>setIsOpen(prev => !prev)}><Menu size={25} /></div>
                <span className="logo">AI Dashboard</span>
                <span className="user-name">{username}</span>
            </div>
        </>
    )

}