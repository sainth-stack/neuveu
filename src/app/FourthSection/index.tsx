import Image from 'next/image'
import React from 'react'
import rev_left from "../../../public/images/assets/rev_left.png";
import rev_right from "../../../public/images/assets/rev_right.png";

const FourthSection = () => {
  return (
    <section className='third-main-container'>
        <div className='elementor-container-review'>
            <div style={{ width: "100%" }}>
                <div className='content-section' style={{
                    padding: '0px !important'
                }}>
                    <div>
                        <h1>REVIEWS</h1>
                    </div>
                    <div>
                        REVIEW Slider
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
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    </section>
  )
}

export default FourthSection