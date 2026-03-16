import React from 'react'
import ProfilePic from "../assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What they are Saying</h1>
            <p className="primary-text">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum lobortis nec. --- IGNORE ---
            </p>
        </div>
        <div className="testimonial-section-buttom">
            <img src={ProfilePic} alt="" />
            <p>
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum lobortis nec. --- IGNORE ---
            </p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>Karan Patel</h2>
        </div>
    </div>
      
    
  )
}

export default Testimonial
