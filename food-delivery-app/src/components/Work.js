import React from 'react'
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.",
        },
        {
            image: ChooseMeals,
            title: "Choose How Often",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum lobortis nec.",
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit auctor dui, sed efficitur ipsum lobortis nec.",
        },
    ]
  return (
    <div className="work-section-wrapper">
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cook a fresh food.
            </p>
        </div>
        <div className="work-section-buttom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work
