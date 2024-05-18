/* eslint-disable react/prop-types */
// import React from 'react'
import './SquareCategory.css'
const SquareCategory = ({grid,text,title,data}) => {
   

  return (
    <div className="main">
        <div className="title"><h5>{title}</h5></div>
        {
                grid?(
                    <>
                        <div className='grid-image'>
                            <img src='https://i.imgur.com/qNOjJje.jpeg' alt='image'/>
                        </div>
                    </>
                ):(
                    <div className="images">
                    <div className="col-1">
                            <div>
                                <img
                                    width={100} height={'auto'}
                                    src="https://i.imgur.com/BG8J0Fj.jpg" alt="image"/>
                                <h6>Dress</h6>
                            </div>
                            <div>
                                <img
                                 width={100} height={'auto'}
                                 src="https://i.imgur.com/qNOjJje.jpeg" alt="image"/>
                                <h6>Dress</h6>
                            </div>
                        </div>
                        <div className="col-2">
                            <div>
                                <img
                                 width={100} height={'auto'}
                                 src="https://i.imgur.com/qNOjJje.jpeg" alt="image"/>
                                 <h6>Dress</h6>
                            </div>
                            <div>
                                <img
                                 width={100} height={'auto'}
                                 src="https://i.imgur.com/qNOjJje.jpeg" alt="image"/>
                                 <h6>Dress</h6>
                            </div>
                        </div>            
                    </div>
                )
            }
        
        <div className='footer'>
            <a href='#'>{text}</a>
        </div>
    </div>
  )
}

export default SquareCategory