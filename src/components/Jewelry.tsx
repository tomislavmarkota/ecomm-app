import React, { useEffect } from 'react'
import { fetchJewelry } from '../features/jewelrySlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import ItemCard from './item/ItemCard'
import Preloader from './Preloader'



const Jewelry = () => {
  const {loading,jewelry,error} = useAppSelector(state => state.jewelry)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchJewelry())
  }, [dispatch])
  
  if(loading) return <Preloader />
  if(error) return <h1>{error}</h1>

  console.log(jewelry)
  return (
    <div>
      <ItemCard items={jewelry}/>
    </div>
  )
}

export default Jewelry