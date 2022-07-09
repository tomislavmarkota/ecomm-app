import React from 'react'
import preloader from '../assets/preloader.svg'

const Preloader = () => {
  return (
    <div style={{display: 'flex', height:'100vh'}}>
        <img style={{margin: "auto"}} src={preloader} alt='Loading'/>
    </div>
  )
}

export default Preloader