import React from 'react'
import Div from '../Div'
import './logolist.scss'

export default function LogoList() {
  const partnerLogos = [
    {
      src: '/images/client1.png', 
      alt:'Partner'
    },
    {
      src: '/images/client2.png', 
      alt:'Partner'
    },
    {
      src: '/images/client3.png', 
      alt:'Partner'
    },
    {
      src: '/images/client4.png', 
      alt:'Partner'
    },
    {
      src: '/images/client5.png', 
      alt:'Partner'
    }
  ]
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index)=><div className="cs-partner_logo" key={index}><img src={partnerLogo.src} alt={partnerLogo.alt} /></div>)}
    </Div>
  )
}
