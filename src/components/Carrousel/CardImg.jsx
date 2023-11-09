import React from 'react'
import image1 from '../../assets/imgsCarrousel/tlefonos.jpg'
import image2 from '../../assets/imgsCarrousel/Reloj.jpg'
import image3 from '../../assets/imgsCarrousel/nuevos.avif'
export const CardImg = () => {
  return (
    <div className='slider-box'>
      <ul>
       <li>
         <img src={image1}/>
       </li>
       <li>
         <img src={image2}/>
       </li>
       <li>
         <img src={image3}/>
       </li>
      </ul>

     </div>
  )
}
