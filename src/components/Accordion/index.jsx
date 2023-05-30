import React from 'react'
import { useState } from 'react'
import Div from '../Div'

export default function Accordion() {
  const [selected, setSelected] = useState(0)
  const handelToggle = (index) => {
    if(selected === index) {
      return setSelected(null)
    }
    setSelected(index)
  }
  const accordionData = [
    {
      question: 'What is Ovex Software all about?',
      answer: 'Ovex’s software solutions deliver exceptional innovation, flexibility and ROI in order to meet your developing needs. We work with our clients to create beautiful websites/portals and digital strategies that make organizations more successful.'
    },
    {
      question: 'What is Software Outsourcing?',
      answer: 'Software Outsourcing describes an arrangement, in which an organization chooses to hire an external software development agency or resources, for example Ovex Software, to effectively carry out all/defined tasks of a software development project.'
    },
    {
      question: 'What are the services that Ovex Software offers?',
      answer: 'Ovex Software provides web development, mobile application development, E-Commerce platforms, Graphic designing, Digital marketing and Software resources outsourcing services.'
    },
    {
      question: 'Do you have the resources with required technology stack in place to support my business processes?',
      answer: 'We only take projects on which we can develop and deliver. If it is outside our area of expertise, we will either excuse ourselves or help you connect with the right resources, even if they are outside our organization.'
    },
    {
      question: 'Do you sign non-disclosure agreements and service level agreements?',
      answer: 'Yes. We sign non-disclosure and service level agreements with each customer who outsources work to Ovex Software. Ovex software provides worry-free outsourcing and development services.'
    },
    {
      question: 'What do we mean by digital media or digital marketing?',
      answer: 'We, at Ovex, are serving organizations as well as individuals for their branding needs. We provide number of digital marketing services which include Search Engine Optimization, social media marketing, Videos and PPC.'
    }
  ]
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index)=>(
        <Div className={`cs-accordian ${selected===index?'active':''}`} key={index}>
          <Div className="cs-accordian_head" onClick={()=>handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>                    
            </span>
          </Div>
          <Div className='cs-accordian_body'>
            <Div className="cs-accordian_body_in">{item.answer}</Div>
            </Div>
        </Div>
      ))}
    </Div>
  )
}
