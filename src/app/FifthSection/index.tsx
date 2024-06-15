import Image from 'next/image'
import React from 'react'
import globe from "../../../public/images/assets/globe.png";

const FifthSection = () => {
  return (
    <section className='fifth-main-container'>
        <div className='elementor-container'>
            <div className='elementor-column'>
                <div className='content-section' style={{padding: '0px !important'}}>
                    <div>
                        LET US OPPORTUNITY TO HELP YOU!
                    </div>
                    <div>
                        <button>Request a consultation</button>
                    </div>
                    <div>
                        contact@neuveu.com
                    </div>
                    <div>
                        Address
                    </div>
                    <div className='elementor-widget-globe-image globe-image-animation-rotate'>
                        <div className='elementor-widget-container'>
                            <div className='globe-image'>
                                <Image loading="lazy" decoding="async" width="1334" height="1181" src={globe} className="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FifthSection