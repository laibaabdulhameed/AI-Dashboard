import { useState } from "react"

export default function TaskInput() {
    const[isTyped, setIsTyped] = useState(null);
    const[isTasks, setIsTasks] =useState(0);
    return(
        <>
           <div className="main-div">
                 <input type="text" placeholder="e.g. Walk"/>
                 <button id="add-btn">Add Task</button>
           </div>
        </>
    )
    
}