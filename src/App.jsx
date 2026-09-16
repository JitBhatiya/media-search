import React from 'react'
import { fetchPhotos, fetchVideo, getGif } from './api/mediaApi'

const App = () => {

  fetchVideo

  function getPhtos(qu){
  return  fetchPhotos(qu)
  
  }
    return (
    <div className='h-screen text-white w-full bg-gray-950'>
      <button className='m-5 p-5 bg-green-500' onClick={async ()=>{
      const data = await getPhtos('cat');
      console.log(data.results);
      }}>Get Photo</button>

      <button className='bg-red-400 m-5 p-5' onClick={async ()=> {
        const data =await fetchVideo('cat');
        console.log(data.videos);
      }}>Get video</button>

      <button onClick={async()=> {
         const data = await getGif('boss');
         console.log(data.data);
      }}>Get gif</button>
    </div>
  )
}

export default App