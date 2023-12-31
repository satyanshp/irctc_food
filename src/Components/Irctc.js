import { Icon } from '@iconify/react'
import React from 'react'

const Irctc = () => {
    const ordering = [
        {
            img:'https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2F1st.webp&w=128&q=75',
            text: 'Choose Delivery Station & Restaurant'
        },
        {
            img:'https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2F2nd.webp&w=128&q=75',
            text: 'Select Menu & Create Order'
        },
        {
            img:'https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2F3rd.webp&w=128&q=75',
            text: 'Enjoy Tasty Food On Train'
        },
    ]
  return (
    <div className='irctc_container'>
        <div className='irctc'>
            <div>
                <img src='https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Firctc-logo.webp&w=32&q=75' alt='irctc' />
                <span>Official IRCTC Partner</span>
            </div>
            <span>Experience Delicious Train Food Delivery with Zoop</span>
        </div>
        <section className='order'>
            <div className='h2'>
                <h2>
                    How Online Train Food Ordering Works
                </h2>
            </div>
            <div className='how_order'>
                {ordering.map((item,index)=>(
                    <div key={`order-step-${index}`}>
                        <img src={item.img} alt={item.text}/>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className='booking'>
            <div className='h2'>
                <h2>
                    Group Booking
                </h2>
            </div> 
            <div>
                <span><img src='https://www.zoopindia.com/_next/image?url=%2Fassets%2Fimages%2Fhome%2Fgroup.webp&w=64&q=75' alt='group' /></span>    
                <span className='text'>Travelling as a group of 15 or more?</span>    
                <span><Icon icon={'iconamoon:arrow-right-2-duotone'} fontSize={18}/></span>    
            </div>   
        </section>
    </div>
  )
}

export default Irctc