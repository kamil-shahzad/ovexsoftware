import React from 'react'
import Slider from "react-slick";
import Div from '../Div';
import Post from '../Post';

export default function PostSlider() {
  const postData = [
    {
      url:'/blog/blog-details', 
      src:'/images/post_1.jpeg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'Advantages of iOS and Android mobile applications'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_2.jpeg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'What Are the Components of UI/UX Custom Website Development?'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_3.jpeg', 
      alt:'Post', 
      date:'05 Mar 2022',
      title:'Top 5 Mobile Device Companies in Pakistan'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_1.jpeg', 
      alt:'Post', 
      date:'07 Mar 2022', 
      title:'Understanding Web Development Technologies: Resources and Techniques'
    },
    {
      url:'/blog/blog-details', 
      src:'/images/post_2.jpeg', 
      alt:'Post', 
      date:'10 Feb 2022',
      title:'antages of iOS and android mobile applications'
    },
  ]
  
  /** Slider Settings **/
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings} className='cs-gap-24'>
      {postData.map((item,index)=>(
          <Div key={index}>
            <Post 
              url={item.url}
              src={item.src} 
              alt={item.alt} 
              date={item.date}
              title={item.title}
            />
          </Div>
        ))}
    </Slider>
  )
}
