import React, { useContext } from 'react'
import "./Userhomehero.css"
import Userhomemid from './Userhomemid';
import Sidebar from './Sidebar';
import { rankingContext } from '../../contexts/rankingcontext';
import Ranking from '../../Ranking/Ranking';

const Userhomehero = () => {
    
  const {ranking} = useContext(rankingContext);
  console.log("this i s" , ranking[0]);
    
  return (
    <div className="ush-main">
        <Sidebar/>
        <div className="ush-mid">
          <Userhomemid/>
        </div>
        <div className="ush-right">
          <Ranking/>
        </div>
    </div>
  )
}

export default Userhomehero