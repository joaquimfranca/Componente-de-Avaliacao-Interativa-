import React from 'react'
import Card from './Card'
import './ThankYou.css'
import thankYouImg from '../media/illustration-thank-you.svg'


const ThankYou = ({rating}) => {
  return (<Card>
        <div className="thank_you_container">
            <img src={thankYouImg} alt="" />
        </div>

        <div className="selected">
            <p>Você selecionou {rating} de 5</p>
        </div>
        <h2 className='title'>Obrigado!</h2>
        <p className='text'>Agradecemos por dedicar seu tempo para avaliar. Se você precisar de mais suporte, não hesite em entrar em contato! </p>
    </Card>
  )
}

export default ThankYou