// import React from 'react'

const SlideRow = ({title}) => {
  return (
    <div>
        <div className="title">
            <h5>
                {title}
            </h5>
        </div>
       <div className="images-indicator">
            <div className="images">
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
                <img src="https://i.imgur.com/Qphac99.jpeg" alt="img"/>
            </div>
            <div className="indicators"></div>
       </div>
    </div>
  )
}

export default SlideRow