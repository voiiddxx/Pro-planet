import React from 'react'
import "./rankingskeleton.css"
import Skeleton from 'react-loading-skeleton';

const Rankingskeleton = () => {
  return (
    <>
    <div className="ranking-skeleton">
        <div className="upper-ranking-skelton-image">
            <div className="skeleton-upper">
            <div className="skel-one">
            <Skeleton circle width={60} height={60}/>
            <Skeleton width={50} height={10}/>
            </div>
            <div className="skel-two">
            <Skeleton circle width={60} height={60}/>
            <Skeleton width={50} height={10}/>
            </div>
            <div className="skel-three">
            <Skeleton circle width={60} height={60}/>
            <Skeleton width={50} height={10}/>
            </div>
            </div>

            <div className="skelton-bar">
               <div className="bar-skel-one">
               <Skeleton height={120} width={60}/>
               </div>
               <div className="bar-skel-two">
               <Skeleton height={150} width={60}/>
               </div>
               <div className="bar-skel-three">
               <Skeleton height={100} width={60}/>
               </div>
            </div>
        </div>
    </div>

    <div className="card-one-skel">
        <Skeleton circle height={50} width={50}/>
        <Skeleton height={20} width={100}/>
        <Skeleton height={20} width={150}/>
    </div>
    <div className="card-one-skel">
        <Skeleton circle height={50} width={50}/>
        <Skeleton height={20} width={100}/>
        <Skeleton height={20} width={150}/>
    </div>
    <div className="card-one-skel">
        <Skeleton circle height={50} width={50}/>
        <Skeleton height={20} width={100}/>
        <Skeleton height={20} width={150}/>
    </div>
    <div className="card-one-skel">
        <Skeleton circle height={50} width={50}/>
        <Skeleton height={20} width={100}/>
        <Skeleton height={20} width={150}/>
    </div>
    </>
  )
}

export default Rankingskeleton
