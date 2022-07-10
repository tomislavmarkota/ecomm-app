import React, { useEffect } from 'react'
import { fetchWomensClothes } from '../features/womensClothesSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import ItemCard from './item/ItemCard'
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
      <h1 style={{textAlign:'center'}}>Women's clothing category</h1>
      <ItemCard items={womensClothes}/>
    </div>
  )
}

export default WomensClothing