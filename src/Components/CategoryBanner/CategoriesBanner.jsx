// import React from 'react'
import Carousel from './../Carousel/carousel'
import './CategoryBanner.css'
import CategoryRow from './CategoryRow'
import SlideRow from './SlideRow'

const CategoriesBanner = () => {

  return (
    <div>
        <div className="carousel-category">
            <div className="carousel">
                <Carousel/>
            </div>
            <div className="category">
                <CategoryRow/>
                <CategoryRow/>
                <SlideRow/>
            </div>
        </div>
    </div>
  )
}

export default CategoriesBanner