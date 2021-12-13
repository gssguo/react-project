
import "bootstrap/dist/css/bootstrap.css";
import {Carousel} from 'react-bootstrap'
import React from 'react';
import imageSrc1 from '../images/pro.jpeg'
import imageSrc2 from '../images/foster1.jpeg'
import imageSrc3 from '../images/foster2.jpeg'
import './ImgSlider.css';
function imgSlider() {
    return(
        <div>
            <Carousel>
                <Carousel.Item >
                    <img src={imageSrc1} alt="Img1" />
                </Carousel.Item >
                <Carousel.Item >
                    <img src={imageSrc2}  alt="Img2" />
                </Carousel.Item >
                <Carousel.Item >
                    <img src={imageSrc3} alt="Img3" />
                </Carousel.Item >
            </Carousel>
        </div>
    )
}
export default imgSlider;