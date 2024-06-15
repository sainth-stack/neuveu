import MultiItemCarousel from '@/components/Carousel'
import React from 'react'

const SecondSection = () => {
  return (
    <section className='second-main-container'>
      <div className='elementor-container'>
        <div style={{ width: '100%' }}>
          <div className='content-section'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
              <h1 className='reviewsHeaderText'>SERVICES</h1>

            </div>
            <MultiItemCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection