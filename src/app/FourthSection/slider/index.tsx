import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.scss";
import platform from '../../../../public/images/assets/star.svg'
import Image from 'next/image';

const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    fade: true, 
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1 
            }
        }
    ]
};

const testimonials = [
    {
        text: `“Neuveu expertly aligns our capabilities 
               with the crucial needs of Kubernetes engineers in our market. 
               With authentic understanding, Neuveu articulate 
               problems and solutions elegantly to diverse stakeholders. 
               We eagerly anticipate expanding 
               our collaboration on projects with joint clients.“`,
        imgSrc: "https://neuveu.com/wp-content/uploads/2023/09/Kyle.jpg",
        name: "Kyle Forster",
        position: "CEO @ RunWhen",
        stars: 5
    },
    {
        text: `“NeuVeu was extremely helpful in giving 
               us product and technology guidance for our dynamic secrets and config engine platform.
               Their comprehensive knowledge of the modern DevSecOps workflows and technologies,
               including CI/CD, container orchestration, and secrets management,
               is an excellent asset for any team that wants help with their DevOps projects.“`,
        imgSrc: "https://neuveu.com/wp-content/uploads/2023/09/greg.jpg",
        name: "Greg Arnette",
        position: "Co-Founder @ CloudTruth",
        stars: 5
    }
];

const TestimonialSlider = () => (
    <div className='container'>
        <Slider {...settings}>
            {testimonials.map((item) => {
                return (
                    <div className="reviews_card" key={""}>
                        <h5 className="review-text">
                            {item.text}
                        </h5>
                        <div className="rev_user">
                            <img decoding="async" src={item.imgSrc} alt={item.name} />
                        </div>
                        <div className="rev_stars" style={{display:'flex'}}>
                            {Array.from({ length: item.stars }).map((_, i) => (
                                <Image key={""} src={platform} alt='img' className='img-content' width={20} height={20} style={{ marginBottom: '20px' }} />
                            ))}
                        </div>
                        <div className="review-info">
                            <span className="review-name">{item.name}</span>
                            <div className="review-position">
                                <p>{item.position}</p>
                            </div>
                        </div>

                    </div>
                )
            })}

        </Slider >
    </div >
);

export default TestimonialSlider;
