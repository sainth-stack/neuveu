import Image from 'next/image'
import React from 'react'
import rev_left from "../../../public/images/assets/rev_left.png";
import rev_right from "../../../public/images/assets/rev_right.png";
import MultiItemCarousel from './slider';
import TestimonialSlider from './slider';

const FourthSection = () => {
    return (
        <section className='third-main-container'>
            <div className='elementor-container-review'>
                <div style={{ width: "100%" }}>
                    <div className='content-section' style={{
                        padding: '0px !important'
                    }}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',alignItems:'center'}}>
                                <h1 className='reviewsHeaderText'>REVIEWS</h1>
                            <div>
                                <TestimonialSlider />
                            </div>
                        </div>
                        <div className='elementor-element elementor-element-left elementor-absolute iteck-image-animation-slide-up-down'>
                            <div className="elementor-widget-container">
                                <div className="iteck-image">
                                    <Image loading="lazy" decoding="async" width="322" height="351" src={rev_left} className="attachment-large size-large wp-image-314" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='elementor-element elementor-element-right elementor-absolute iteck-image-animation-slide-up-down'>
                            <div className="elementor-widget-container">
                                <div className="iteck-image">
                                    <Image loading="lazy" decoding="async" width="322" height="351" src={rev_right} className="attachment-large size-large wp-image-314" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FourthSection