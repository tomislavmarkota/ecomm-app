import React, { useEffect } from 'react'
import { fetchElectronics } from '../features/electronicSlice'
import { useAppDispatch, useAppSelector } from '../hooks'
import ItemCard from './item/ItemCard'
import Preloader from './Preloader'



const Electronics = () => {
  const {loading,electronics,error} = useAppSelector(state => state.electronics)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchElectronics())
  }, [dispatch])
  
  if(loading) return <Preloader />
  if(error) return <h1>{error}</h1>

  console.log(electronics)
  return (
    <div>
      <ItemCard items={electronics}/>
    </div>
  )
}

export default Electronics