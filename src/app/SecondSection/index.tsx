import MultiItemCarousel from '@/components/Carousel'
import React from 'react'

const SecondSection = () => {
  return (
    <section className='second-main-container'>
        <div className='elementor-container'>
            <div style={{ width: '100%' }}>
                <div className='content-section'>
                    <MultiItemCarousel />
                </div>
            </div>
        </div>
    </section>
  )
}

export default SecondSection