import React from 'react'
import "../components/hero/Userhomehero.css"

const Modalranking = ({ranking}) => {
  
    return (
        <>
        {
            ranking.length > 3 ? 
            <div className="ush-right">
                    <div className="ranking-upper">
                      <div className="ranking-one">
                      <img src={ranking[1].userprofile}alt="numberone" />
                      <p>{ranking[1].username}</p>
                        <div className="box-one">
                          
                          <p>Rating:{ranking[1].pro_planet_rating}</p>
                        </div>
                      </div>
                      {/* ////////// */}
                      <div className="ranking-two">
                      <img src={ranking[0].userprofile} alt="numberone" />
                      <p>{ranking[0].username}</p>
                        <div className="box-two">
                        
                          <p>Rating: {ranking[0].pro_planet_rating}</p>
                        </div>
                      </div>
        
                      {/* //// */}
                      <div className="ranking-three">
                      <img src={ranking[2].userprofile} alt="numberone" />
                      <p>{ranking[2].username}</p>
                        <div className="box-three">
                        
                          <p>Rating:{ranking[2].pro_planet_rating}</p>
                        </div>
                      </div>
                    </div>
        
                    <div className="ranking-list">
                      <h1 className='heading-ranking'>Ranking 📊</h1>
                      {
                        ranking.map((curr , index)=>{
                          return <div className="list-card">
                          <div className="pos">
                            <p>{index+1}</p>
                          </div>
                          <img src={curr.userprofile} alt="user" />
                          <h2>{curr.username}</h2>
                          <h4>{curr.pro_planet_rating} ratings</h4>
                        </div>
                        })
                      }
                    </div>
                  </div> :<p>there is no any data</p>
        }
        </>
      )
}

export default Modalranking