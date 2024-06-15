import Image from 'next/image'
import React from 'react'
import globe from "../../../public/images/assets/globe.png";
import { Button } from '@mui/material';

const FifthSection = () => {
    return (
        <section className='fifth-main-container'>
            <div className='elementor-container'>
                <div className='elementor-column'>
                    <div className='content-section' style={{ padding: '0px !important', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ fontSize: '40px', color: '#fff', fontWeight: 700, letterSpacing: '20px', marginBottom: '50px', textAlign: 'center' }}>
                            LET US OPPORTUNITY TO HELP YOU!
                        </div>
                        <div >
                            <Button variant="outlined" style={{ background: '#02010100', borderColor: '#15F1FF', borderRadius: '30px', padding: '7px 25px', fontSize: '12px', borderWidth: '1px', color: '#fff', marginBottom: '10px' }}>Request A Consultation</Button>
                        </div>
                        <div style={{ fontSize: '24px', color: '#FFFFFFE6', fontWeight: 300, marginBottom: '20px' }}>
                            contact@neuveu.com
                        </div>
                        <div style={{ fontSize: '24px', color: '#FFFFFFB3', fontWeight: 300, textAlign: 'center', marginBottom: '20px' }}>
                            4-510, SALI STREET, GREAMSPET, CHITTOOR, <br />ANDHRA PRADESH, INDIA 517002
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