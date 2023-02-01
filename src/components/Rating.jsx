

import React, { useState } from 'react'
import './Rating.css'
import Card from './Card'
import starImg from '../../src/media/icon-star.svg'

const Rating = ({rating,setRating,setShowThankYouPage}) => {
 const[activeRatings,setActiveRatings]= useState({
  oneStars:false,
  twoStars:false,
  trheeStars:false,
  fourStars:false,
  fiveStars:false
 } )

 const handleSubmit = () => {
 if (!rating) return

 setShowThankYouPage(true)
 }
  
  return( <Card> 

<div className="star_img_container">
<img src={starImg} alt="" />
</div>

<h1 className='title'>Como foi sua experiência?</h1>
<p className='text'>Por favor, nos conte como foi sua experiência. Todos os comentários são apreciados para ajudar a melhorarmos nosso serviços! </p>

<div className='rating'>
    <div className={activeRatings.oneStars
     ?"rating_container active"
     :"rating_container"}
     onClick= {()=>[setActiveRatings({
      oneStars:true,
      twoStars:false,
      trheeStars:false,
      fourStars:false,
      fiveStars:false
     }), setRating(1)
     
]}>1</div>

    <div className={activeRatings.twoStars
     ?"rating_container active"
     :"rating_container"}
     onClick= {()=>[setActiveRatings({
      oneStars:false,
      twoStars:true,
      trheeStars:false,
      fourStars:false,
      fiveStars:false
     }),setRating(2)

     ]}>2</div>

    <div className={activeRatings.trheeStars
     ?"rating_container active"
     :"rating_container"}
     onClick= {()=>[setActiveRatings({
      oneStars:false,
      twoStars:false,
      trheeStars:true,
      fourStars:false,
      fiveStars:false
     }),setRating(3)

     ]}>3</div>

    <div className={activeRatings.fourStars
     ?"rating_container active"
     :"rating_container"}
     onClick= {()=>[setActiveRatings({
      oneStars:false,
      twoStars:false,
      trheeStars:false,
      fourStars:true,
      fiveStars:false
     }),setRating(4)
     
     ]}>4</div>

    <div className={activeRatings.fiveStars
     ?"rating_container active"
     :"rating_container"}
     onClick= {()=>[setActiveRatings({
      oneStars:false,
      twoStars:false,
      trheeStars:false,
      fourStars:false,
      fiveStars:true,
     }),setRating(5)
     
     ]}>5</div>
</div>

<button className='submit_btn' onClick={handleSubmit}>ENVIAR</button>

  
    </Card>
  )
}

export default Rating