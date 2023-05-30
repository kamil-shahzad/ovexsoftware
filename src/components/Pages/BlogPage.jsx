import React, { useEffect } from 'react'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogPage() {
  pageTitle('Blog');
  const postData = [
    {
      thumb:'/images/post_4.jpeg',
      title:'Advantages of iOS and Android mobile applications',
      subtitle:'The Android and iOS platforms have been around for over a decade, but they’re still two completely different operating systems. While both platforms offer their own advantages, there are also some key differences between them that can help you choose the best mobile app platform for your business needs.',
      date:'07 Mar 2022',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/post_5.jpeg',
      title:'What Are the Components of UI/UX Custom Website Development?',
      subtitle:'User experience and user interface are two important components of any website. Both the factors together determine how users interact with your website. If your UI and UX design is not up to the mark, then it can be a turnoff for your website visitors. Read on to know what exactly these two terms mean and how you can incorporate them in your custom website development services.',
      date:'05 Mar 2023',
      category:'UI UX Design',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    },
    {
      thumb:'/images/post_6.jpeg',
      title:'Top 5 Mobile Device Companies in Pakistan',
      subtitle:'Mobile technology has become a necessity for everyone in Pakistan. This is why there are companies who are trying to make their business as big as possible. But how do you choose a mobile device company? Well, here’s our list of top 5 mobile device companies in Pakistan:',
      date:'04 Mar 2023',
      category:'Tech',
      categoryHref:'/blog',
      href:'/blog/blog-details'
    }
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <PageHeading 
        title='Our Blog'
        bgSrc='/images/blog_hero_bg.jpeg'
        pageLinkText='Blog'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {postData.map((item, index)=> (
              <Div key={index}>
                <PostStyle2 
                  thumb={item.thumb}
                  title={item.title}
                  subtitle={item.subtitle}
                  date={item.date}
                  category={item.category}
                  categoryHref={item.categoryHref}
                  href={item.href}
                />
                {postData.length>index+1 && <Spacing lg='95' md='60'/>}
              </Div>
            ))}
            <Spacing lg='60' md='40'/>
            <Pagination/>
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg='0' md='80'/>
            <Sidebar/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
