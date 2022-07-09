import React, { useEffect } from 'react'
import { fetchWomensClothes } from '../features/womensClothesSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import Preloader from './Preloader'

const WomensClothing = () => {
  const {loading, womensClothes, error} = useAppSelector((state) => state.womensClothes)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchWomensClothes())
  },[dispatch])


  if(loading) return <Preloader />
  if(error) return <h2>{error}</h2>

  console.log(womensClothes)

  return (
    <div>
      
    </div>
  )
}

export default WomensClothing