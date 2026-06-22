import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
export default function App(){
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
       <Navbar username="Laiba" setIsOpen={setIsOpen} isOpen={isOpen}/>
       <Sidebar isOpen={isOpen}/>
    </>
  )
}