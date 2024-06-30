import React from 'react'
import { useNavigate } from 'react-router-dom'

const Intro = () => {
  const navigate = useNavigate()
  function navigateToLogin(){
    navigate('/login')
  }
  
  return (
    <div className='w-1/3  absolute mt-14 ml-8' >
      <h1 className='text-white font-semibold text-3xl mb-4' >Viswam Welcomes you</h1>
      <p className='text-gray-400' >Viswam is Streaming Superhit Movies. Watch Thriller, Romance & Comedy On One Platform</p>

        <button className='bg-teal-600 rounded px-10 py-2 font-semibold text-white mt-8' onClick={navigateToLogin} >Join into Viswam</button>

      <div className='text-white mt-20 flex divide-x-2' >
        <div>watch Movies online</div>
        <div className='pl-4' >Buy Premium Movies</div>
        <div className='pl-4'>Watch Latest Movie Trailers</div>
        <div className='pl-4'>Short Videos</div>
      </div>
    </div>
  )
}

export default Intro
