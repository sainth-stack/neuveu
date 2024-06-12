import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/assets/logo.png';

const Header = () => {
  return (
    <nav className='custom-header fixed'>
      <section className='header-main-section'>
        <div className='header-container'>
          <div className='logo-image'>
            <a href='#' className='logo'>
              <Image src={logo} alt='logo' className='img-logo' />
            </a>
          </div>
          <div className='d-flex menu-items'>
            <ul id="menu-main-menu"
              className="home-nav navigation slide-up">
              <li
                className="menu-item">
                <a
                  href="https://neuveu.com/contact/">CONTACT</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </section>
    </nav>
  )
}

export default Header