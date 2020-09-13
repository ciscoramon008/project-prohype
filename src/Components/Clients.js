import React, {useRef, useEffect} from 'react';
import SwiperCore, { Pagination, Scrollbar, A11y, Swiper, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
import './Clients.css';

const Clients = ({clients}) => {
    SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);
    const swiper = useRef(null);

    useEffect(()=>{
        swiper.current = new Swiper('.swiper-container', {
            slidesPerView: 3,
            // slidesPerGroup: 5,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            speed: 600,
            autoplay: {
                delay: 800
            }
        });
        console.log('hello');
    },[])

    return (
        <div className='client-container'>
            <h1 className='text-center pb-3'>OUR CLIENTS</h1>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {clients.map(c => <div className='swiper-slide slider-item' key={c.id}><img src={c.logo} alt={`${c.name}-logo`} /></div>)}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}

export default Clients;