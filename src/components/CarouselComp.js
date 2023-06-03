import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
const CarouselComp = () => {
    const [list, setList] = useState([
        {
            path: "./../assets/c1.jpg",
            link: ""
        },
        {
            path: "./../assets/c2.jpg",
            link: ""
        },
        {
            path: "./../assets/c3.jpg",
            link: ""
        },
        {
            path: "./../assets/c4.jpg",
            link: ""
        },
        {
            path: "./../assets/c5.jpg",
            link: ""
        },
        {
            path: "./../assets/c6.jpg",
            link: ""
        },
        {
            path: "./../assets/c7.jpg",
            link: ""
        },
        {
            path: "./../assets/c8.jpg",
            link: ""
        },
        {
            path: "./../assets/c9.jpg",
            link: ""
        },
        {
            path: "./../assets/c10.jpg",
            link: ""
        },
        {
            path: "./../assets/c11.jpg",
            link: ""
        },
        {
            path: "./../assets/c12.jpg",
            link: ""
        },
        {
            path: "./../assets/c13.jpg",
            link: ""
        },
        {
            path: "./../assets/c14.jpg",
            link: ""
        },
        {
            path: "./../assets/c15.jpg",
            link: ""
        }
    ])
    return <Carousel>
        {list.map(l => {
            return <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={l.path}
                    alt="First slide"
                />
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
        })}


    </Carousel>
}

export default CarouselComp