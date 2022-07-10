import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { fetchMensClothes } from '../features/mensClothesSlice';
import Preloader from './Preloader';
//components
import ItemCard from './item/ItemCard';

const MensClothing = () => {
  const {loading, mensClothes, error} = useAppSelector((state) => state.mensClothes)
  const dispatch = useAppDispatch();
  const {cart} = useAppSelector(state => state.cart)
  useEffect(() => {
   dispatch(fetchMensClothes())
  }, [dispatch])

  if(loading) return <Preloader />
  if(error) return <h2>{error}</h2>

  console.log(mensClothes)
  console.log(cart)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Men's clothing category</h1>
      <ItemCard items={mensClothes}/>
    </div>
  )
}

export default MensClothing