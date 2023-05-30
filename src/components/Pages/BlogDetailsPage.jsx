import { Icon } from '@iconify/react'
import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { pageTitle } from '../../helper'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import Div from '../Div'
import Sidebar from '../Sidebar.jsx'
import Spacing from '../Spacing'

export default function BlogDetailsPage() {
  const params = useParams()
  pageTitle('Blog Details');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText={params.blogDetailsId}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <img src="/images/blogdetail.png" alt="Post" className="w-100 cs-radius_15" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">07 Mar 2023</span>
                  <Link to="/blog" className="cs-post_avatar">Tech</Link>
                </Div>
                <h2 className="cs-post_title">Advantages of iOS and Android mobile applications</h2>
                <p>The Android and iOS platforms have been around for over a decade, but they’re still two completely different operating systems. While both platforms offer their own advantages, there are also some key differences between them that can help you choose the best mobile app platform for your business needs.</p>
                <blockquote className="cs-primary_font">
                  The Android and iOS platforms have been around for over a decade, but they’re still two completely different operating systems. While both platforms offer their own advantages, there are also some key differences between them that can help you choose the best mobile app platform for your business needs.
                  {/* <small>Loren Mulari</small> */}
                </blockquote>
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blogdetail.png" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blogdetail.png" alt="Blog Details" className="cs-radius_15 w-100" />
                    <Div className="cs-height_45 cs-height_lg_45" />
                  </Div>
                </Div>
                <h3>The Android app development process is faster</h3>
                <p>As you can see from the screenshot above, there are more than 1 million apps in the Play Store. This means that there is a large community of developers who have created apps for Android devices, which makes it easier to find help if you get stuck or need some new ideas on how to build your own app.
                  The tools and frameworks available for Android allow developers to build their own customizations without having to write code themselves (as they do with iOS). This means that anyone with basic computer skills can learn how this amazing platform works by using free tutorials online or by attending local meet-ups where they can talk directly with other designers who work on similar projects as themselves!</p>
                <h3>The App Store guidelines are stricter than Google’s Play guidelines</h3>
                <p>
                  The App Store guidelines are stricter than Google’s Play guidelines. Apple is more restrictive about what can be in an app, while Google’s policy is more open and relaxed. The main reason for this difference is security: Apple wants to protect users’ information and make sure that apps don’t contain malicious code or malware. In addition, Apple wants to ensure that all apps are created with the user experience in mind—not just for the sake of making money off them (which could lead to a negative user experience).
                </p>

                <h3>Android apps are less risky to build because more devices run on the platform</h3>
                <p>
                  Android is an open platform.<br />
                  More devices run on Android.<br />
                  This creates more opportunities to reach users, which means there’s a larger market share for you as a developer of Android applications.
                </p>
                <h3>Advantages of iOS</h3>
                <p>Excellent UI and fluid responsive<br />
                  Developers can design apps because less number of models<br />
                  Metal and shiny coating are ultimate for Apple devices<br />
                  Jail breaking for customization<br />
                  Generates less heat when compared to Android<br />
                  Excellent for media entertainment<br />
                  Suits for business and gaming<br />
                  iOS Is More “Intuitive”</p>
                <h3>iOS and Android are very different platforms, but both have their advantages when it comes to creating mobile apps</h3>
                <p>If you’re not sure which platform to use, here are some of the reasons why each one is better suited for certain types of applications.

                  iOS: iOS has more restrictive rules when it comes to design, but allows for more security and control over your application. The iPhone has a larger user base than Android does, so if you want users from around the world on your app (which can be useful in marketing), this might be the way to go. You also get access to Apple’s famous App Store—a place where people can download apps directly from their devices instead of going through third-party stores like Google Play or Amazon Appstore</p>
                <h3>Conclusion</h3>
                <p>As you can see, there are many advantages to choosing an iOS or Android-based app for your business. But several prominent people have shifted from iPhone to Android. Android’s connection to the Google ecosystem of services is strong and arguably more useful compared with Apple’s cloud services suite. Making a choice between iOS and Android application development is not easy as both come with advantages and drawbacks. One of the best software solutions are provided by Ovex Software, make sure you check out www.ovexsoftware.com to learn more.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30' />
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5' />
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30' />
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{ position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important' }} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80' />
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title='Let’s disscuse make <br />something <i>cool</i> together'
          btnText='Apply For Meeting'
          btnLink='/contact'
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
