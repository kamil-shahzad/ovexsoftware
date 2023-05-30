import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const copyrightLinks = [
    {
      title: 'Terms of Use',
      href: '/'
    },
    {
      title: 'Privacy Policy',
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'Website Development',
      href: '/service/service-details'
    },
    {
      title: 'App Development',
      href: '/service/service-details'
    },
    {
      title: 'Digital marketing',
      href: '/service/service-details'
    },
    {
      title: 'Software Outsourcing',
      href: '/service/service-details'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoSrc='/images/logo1.png' 
                  logoAlt='Logo'
                  text ='Ovex Software - From an idea to final product'
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading='Services'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title='Contact Us'/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title='Subscribe' 
                  subtitle='Get latest news and articles from Ovex Software' 
                  placeholder='info@ovextech.com'
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2023 Ovex Software.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
