import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchMensClothes } from '../features/mensClothesSlice';
import Preloader from './Preloader';

const MensClothing = () => {
  const {loading, mensClothes, error} = useAppSelector((state) => state.mensClothes)
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(fetchMensClothes())
  }, [dispatch])

  if(loading) return <Preloader />
  if(error) return <h2>{error}</h2>

  console.log(mensClothes)
  return (
    <div>

     
    </div>
  )
}

export default MensClothing