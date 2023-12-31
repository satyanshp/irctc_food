import React from 'react'

const Footer = () => {
  const footerLinks = [
    {
      header:"About Zoop",
      links:[
        {
          text:'About Us',
          link:''
        },
        {
          text:'Terms & Conditions',
          link:''
        },
        {
          text:'Privacy Policy',
          link:''
        },
        {
          text:'Cancellation Policy',
          link:''
        },
        {
          text:'News Room',
          link:''
        },
        {
          text:'Feedback & Complaints',
          link:''
        },
        {
          text:'Contact Us',
          link:''
        },
      ]
    },
    {
      header:"Zoop Business",
      links:[
        {
          text:'IRCTC e-Catering',
          link:''
        },
        {
          text:'Vendor Registration',
          link:''
        },
        {
          text:'Need Help?',
          link:''
        },
        {
          text:'FAQs',
          link:''
        },
        {
          text:'Latest Offers',
          link:''
        },
        {
          text:'Sitemap',
          link:''
        },
      ]
    },
    {
      header:"Zoop Business",
      links:[
        {
          text:'IRCTC e-Catering',
          link:''
        },
        {
          text:'Vendor Registration',
          link:''
        },
        {
          text:'Need Help?',
          link:''
        },
        {
          text:'FAQs',
          link:''
        },
        {
          text:'Latest Offers',
          link:''
        },
        {
          text:'Sitemap',
          link:''
        },
      ]
    },
    {
      header:"Zoop Business",
      links:[
        {
          text:'IRCTC e-Catering',
          link:''
        },
        {
          text:'Vendor Registration',
          link:''
        },
        {
          text:'Need Help?',
          link:''
        },
        {
          text:'FAQs',
          link:''
        },
        {
          text:'Latest Offers',
          link:''
        },
        {
          text:'Sitemap',
          link:''
        },
      ]
    },
  ]
  return (
    <section className='footer'>
      <section className='footer-box-container'>
        {footerLinks.map((item,index)=>(<div className='footer-box' key={`footer-box-${index}`}>
          <span>{item.header}</span>
          <ul>
            {item.links.map((itm,idx)=>(<li key={`footer-link-${idx}`}>{itm.text}</li>))}
          </ul>
        </div>))}
      </section>
      <section className='footer-credit'>
        <div className='social-links'>
          <img src='https://www.zoopindia.com/assets/images/home/googlePlay.svg' alt='store' />
          <img src='https://www.zoopindia.com/assets/images/home/apple.svg' alt='ios' />
          <img src='https://www.zoopindia.com/assets/images/home/whatsapp.svg' alt='whatsapp' />
        </div>
        <div>
          <p>1st Floor, B-2/11, Mohan Cooperative Industrial Estate, New Delhi South Delhi, Delhi, 110044</p>
          <p>© 2023 <a href="/">ZOOP</a> - All rights reserved. Zoop Web Services Pvt. Ltd.</p>
        </div>
      </section>
    </section>
  )
}

export default Footer