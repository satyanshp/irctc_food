import { Icon } from '@iconify/react'
import React from 'react'

const Benifits = () => {
    const [benifits, setBenifits] = React.useState(false)
  return (
    <div className='benifits'>
        {benifits&&<section>
            <div className='content-container'>
                <div className='content'>
                    <h2>Food on Train Online Booking Service by Zoop - Your Trusted Food Delivery Partner for Train Journeys</h2>
                    <p>Zoop is India's No. #1 train food delivery service and IRCTC's trusted e-Catering Partner. With an extensive network of over 2500 FSSAI approved restaurants, food outlets, and cafes; you can relish delightful food on train from renowned eateries throughout your trip. Operating round the clock, Zoop is delivering food on more than 5000 trains, ensuring a satisfying dining experience every time you travel.</p>
                </div>
                <div className='content'>
                    <h2>Food on Train Online Booking Service by Zoop - Your Trusted Food Delivery Partner for Train Journeys</h2>
                    <p>Zoop is India's No. #1 train food delivery service and IRCTC's trusted e-Catering Partner. With an extensive network of over 2500 FSSAI approved restaurants, food outlets, and cafes; you can relish delightful food on train from renowned eateries throughout your trip. Operating round the clock, Zoop is delivering food on more than 5000 trains, ensuring a satisfying dining experience every time you travel.</p>
                </div>
                <div className='content'>
                    <h2>Food on Train Online Booking Service by Zoop - Your Trusted Food Delivery Partner for Train Journeys</h2>
                    <p>Zoop is India's No. #1 train food delivery service and IRCTC's trusted e-Catering Partner. With an extensive network of over 2500 FSSAI approved restaurants, food outlets, and cafes; you can relish delightful food on train from renowned eateries throughout your trip. Operating round the clock, Zoop is delivering food on more than 5000 trains, ensuring a satisfying dining experience every time you travel.</p>
                </div>
            </div>
        </section>}
        <button onClick={()=>setBenifits(!benifits)}>{benifits?"Less":'Explore More'} <Icon icon={'iconamoon:arrow-down-2'} fontSize={24} color='aqua' style={{marginLeft:'2px',transform:benifits?'rotate(180deg)':'none'}}/></button>
    </div>
  )
}

export default Benifits