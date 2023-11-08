import React, { useContext } from 'react'
import { rankingContext } from '../contexts/rankingcontext';
import Modalranking from './Modalranking';
import Rankingskeleton from '../components/Allskeleton/Rankingskeleton';

const Ranking = () => {
    
    const {ranking , isLoading} = useContext(rankingContext);
    
    if(isLoading){
      return <Rankingskeleton/>
    }
    else{
      return <Modalranking ranking={ranking}/>
    }
}

export default Ranking