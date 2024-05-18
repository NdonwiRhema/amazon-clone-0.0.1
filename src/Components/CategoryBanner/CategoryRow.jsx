// import React from 'react'

import SquareCategory from "./SquareCategory"

const CategoryRow = () => {
  return (
    <div className='container-fluid' style={{marginBottom:28}}>
                   <div className='row'>
                        <div className='col-sm-3'>
                            <SquareCategory text={'See More'} title={'Gaming Accessories'}/>
                        </div>
                        <div className='col-sm-3'>
                            <SquareCategory  text={'See More'} title={'Refresh Your Space'}/>
                        </div>
                        <div className='col-sm-3'>
                            <SquareCategory grid={true} text={'Shop now'} title={'Deals In Pcs'}/>
                        </div>
                        <div className='col-sm-3'>
                            <SquareCategory text={'See more'} title={'Shop Deals in Fashion'}/>
                        </div>
                   </div>
                </div>
  )
}

export default CategoryRow