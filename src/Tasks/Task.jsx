import React, {  useState } from 'react'
import "./Task.css"
import Usernav from '../components/Nav/Usernav'
import Sidebar from '../components/hero/Sidebar'
import easy from "./easy.svg"
import medium from "./medium.svg"
import hard from "./hard.svg"
import Viewtask from '../components/Modals/Task/Viewtask'
import Ranking from '../Ranking/Ranking'

const Task = () => {
    const [tasklevel, settasklevel] = useState("");
    const [opanViewTaskModal, setopanViewTaskModal] = useState(false);

    const closeOpentaskmodel = ()=>{
        setopanViewTaskModal(false);
    }
  return (
    <>
    <div className="task-main">
        <Usernav/>
        <div className="task-main-content">
            <div className="task-left">
                <Sidebar/>
            </div>
            <div className="task-mid">
                <div className="mid-main">
                    <h1>Weekly Tasks 🔔</h1>
                    <div className="task-cards">
                        <div className="card-image">
                        <img onClick={()=>{
                            settasklevel("Easy")
                            setopanViewTaskModal(true)
                        }} src={easy} alt="easy card" />
                        <img onClick={()=>{
                            settasklevel("Medium")
                            setopanViewTaskModal(true)
                        }}  src={medium} alt="easy card" />  
                        </div>

                    </div>
                    <img onClick={()=>{
                            settasklevel("Hard")
                            setopanViewTaskModal(true)
                        }}  className='hard' src={hard} alt="hardimage" />
                </div>
            </div>
            <div className="task-right">
                <Ranking/>
            </div>
        </div>
        {
        opanViewTaskModal!==false ? <Viewtask tasklevel={tasklevel} close={closeOpentaskmodel}/> : <p></p>
    }
    </div>
    
    </>
  )
}

export default Task