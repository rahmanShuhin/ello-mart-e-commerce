import { useEffect, useState } from 'react';
import BannerImg from '../../../assets/data/BannerImg';

const TopBanner = () => {
    const [slideIndex , setSlideIndex] = useState(0);

    useEffect(() => {
        let timer = setInterval(() => {
            setSlideIndex(prev => prev + 1)
            if(slideIndex === BannerImg.length - 1) {
                setSlideIndex(0)
            }
        }, 2500)
        return (() => {
            clearInterval(timer)
        })
    }, [slideIndex])

    const handleDot = (index) => {
        setSlideIndex(index);
    }
    
    return (
        <>
            <div className="top-banner-section">
                {
                    BannerImg.map((item,index)=>(
                        <div key={index} className={(slideIndex === index) ? "banner-container b-active" : "banner-container"}>
                            <a href={item.link}>
                                <img src={item.img} alt="" width="100%" loading={item.loading} style={{objectFit:"cover"}}/>
                            </a>
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

export default TopBanner;
