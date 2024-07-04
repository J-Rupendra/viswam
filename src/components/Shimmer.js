import React from 'react'

const Shimmer = ({count}) => {
  return (
    <>
      {[...new Array(count)].map((_,index) => (
        <div key={index} className="w-40 h-64 animate-pulse bg-gray-700 rounded-lg p-2 mr-6 mb-4 ">
          <div className="w-auto bg-gray-600 h-5/6 rounded-lg"></div>
          <div className="w-full mt-3 h-4 rounded-sm bg-gray-600 "></div>
        </div>
      ))}
    </>
  );
}

export default Shimmer
