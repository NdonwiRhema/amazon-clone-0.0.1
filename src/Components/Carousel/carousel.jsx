// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const carousel = () => {
  return (
    <div>
        <Carousel showThumbs={false} showIndicators={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200_V3._CB558389732_.jpg" alt="image 1"/>
                    
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_March_hero1._CB580055456_.jpg" alt="image 1"/>
                    
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg" alt="image 1"/>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/harsmisc/2024/5299-HI---HMD---Hero---May-8_PC_Rec.jpg_1500X600._CB557171038_.jpg" alt="image 1"/>
                </div>
                
        </Carousel>
    </div>
  )
}

export default carousel