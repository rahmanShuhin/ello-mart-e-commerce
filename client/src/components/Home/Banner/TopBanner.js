import { memo, useEffect, useState } from 'react';
import BannerImg from '../../../assets/data/BannerImg';

const TopBanner = () => {
    const [slideIndex , setSlideIndex] = useState(0);

    useEffect(() => {
        let index = 0
        let timer = setInterval(() => {
            setSlideIndex(index++)
            if(index === BannerImg.length) {
                index = 0;
            }
        }, 2000)
        return (() => {
            clearInterval(timer)
        })
    }, [])

    const handleDot = (index) => {
        setSlideIndex(index);
    }
    
    return (
        <>
            <div className="top-banner-section">
                {
                    BannerImg.map((item,index)=>(
                        <div key={index} className={(slideIndex === index) ? "banner-container b-active" : "banner-container"}>
                            <img src={item.img} alt="" width="100%" loading={item.loading} style={{objectFit:"cover"}}/>
                        </div>
                    ))
                }
                <div className="dots-container">
                {
                    BannerImg.map((item,index)=>(
                        <div key={index} onClick={() => handleDot(index)} className={(slideIndex === index) ? "dot dot-active" : "dot"}/>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default memo(TopBanner);
