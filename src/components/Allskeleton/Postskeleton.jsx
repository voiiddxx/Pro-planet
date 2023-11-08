import React from 'react'
import Skeleton from 'react-loading-skeleton';

const Postskeleton = () => {
  return (
    <>
    <div className="post-skeleton">
        <div className="image-skeleton">
          <Skeleton circle width={60} height={60}/>
         <div className="image-text-skeleton">
         <Skeleton width={200}/>
          <Skeleton width={300}/>
         </div>
        </div>

        <div className="main-skelton">
          <Skeleton height={440} width={550} />
        </div>

      </div>
    <div className="post-skeleton">
        <div className="image-skeleton">
          <Skeleton circle width={60} height={60}/>
         <div className="image-text-skeleton">
         <Skeleton width={200}/>
          <Skeleton width={300}/>
         </div>
        </div>

        <div className="main-skelton">
          <Skeleton height={440} width={550} />
        </div>

      </div></>
  )
}

export default Postskeleton
