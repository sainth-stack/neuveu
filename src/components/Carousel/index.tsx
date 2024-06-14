import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.scss";
import Card from '../Card';
import Cloud from "../../../public/images/assets/cloud.png";
import SRE from "../../../public/images/assets/SRE.png";
import Containerization from "../../../public/images/assets/containerization.png"
import Analytics from "../../../public/images/assets/Analytics.png"
import Devops from "../../../public/images/assets/devops.png"
import platform from '../../../public/images/assets/Platform_engineering.png'

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 2
            }
        }
    ]
  };

const MultiItemCarousel = () => {

  return (
    <div className='container'>
      <Slider {...settings}>
            <Card heading={'Cloud'} body={'We specialize in comprehensive multi-cloud strategies, seamless cloud migration, and optimized architecture, delivering scalable, secure, and agile cloud solutions'} image={Cloud }/>
            <Card heading={'Containerization'} body={'We excel in containerization leveraging modern technologies like Kubernetes, ensuring cloud-agnostic, scalable, and efficient application deployment'} image={SRE }/>
            <Card heading={'SRE'} body={'We offer expertise in delivering performance monitoring, incident management, and system optimization for unrivaled system reliability and scalability'} image={Containerization }/>
            <Card heading={'Analytics'} body={'We deliver data-driven analytics solutions, harnessing advanced algorithms and visualization for informed decision-making and business success'} image={Analytics }/>
            <Card heading={'DevSecOps'} body={'We accelerate your software delivery with streamlined DevSecOps pipelines, enhancing security collaboration, automation, and continuous improvement'} image={Devops }/>
            <Card heading={'Platform Engineering'} body={'We provide advanced technology implementation, automation, seamless system management, and transformative innovation for enhanced efficiency and success'} image={platform }/>
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
