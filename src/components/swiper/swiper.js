import React from "react";
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css';
import "./swiper.scss";
class Swip extends React.Component {
    constructor() {
        super();
        this.swiperDom = React.createRef()
    }
    render() {
        let { imglist } = this.props;
        return (
            <div className="swiper-container" ref={this.swiperDom}>
                <div className="swiper-wrapper">
                    {
                        imglist.map((item, index) => (
                            <div className="swiper-slide" key={index}><img src={item} alt="图片加载失败" /></div>
                            
                        ))
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
    componentDidMount() {

        this.mySwiper = new Swiper(this.swiperDom.current, {
            direction: 'horizontal',
            loop: true,
            speed: 2000,
            disableOnInteraction: false,
            autoplay: {
                delay: 2000, //多久滑动一次
                disableOnInteraction: false   //鼠标滑动后依然自动轮播
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // on: {
            //     click: function () {
            //         alert('你点了Swiper');
            //     },
            // }
        })
    }
    componentDidUpdate() {
        
        this.mySwiper.destroy() ;
        this.mySwiper = new Swiper(this.swiperDom.current, {
            direction: 'horizontal',
            loop: true,
            speed: 2000,
            disableOnInteraction: false,
            autoplay: {
                delay: 2000, //多久滑动一次
                disableOnInteraction: false   //鼠标滑动后依然自动轮播
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            // on: {
            //     click: function () {
            //         alert('你点了Swiper');
            //     },
            // }
        })
    }
}
export default Swip;