import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../redux/features/collectionSlice'

const CollectionCard = ({item}) => {

    const dispatch = useDispatch()

    const removeFromCollection = (item)=> {
            dispatch(removeCollection(item.id))
            dispatch(removeToast())
    }
  return (
   <div className='w-[17vw] h-80 relative bg-white rounded-xl overflow-hidden'>
            <a className='h-full' target='_blank' rel='noopener noreferrer' href={item.url}>
                {item.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt='' /> : ''}
                {item.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt='' /> : ''}
            </a>
            <div id='bottom' className='flex justify-between items-center w-full px-6 py-5 text-white absolute bottom-0 gap-3 z-10'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden '>
                    {item.title}
                </h2>
                <button onClick={(e) => {
                    e.stopPropagation()
                    removeFromCollection(item)
                }} className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer'>Remove</button>
            </div>
        </div>
  )
}

export default CollectionCard