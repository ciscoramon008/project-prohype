import React from 'react';
import './ContentCarousel.css';

const ContentCarousel = ({
    carousels = [
        {
            image: 'https://c.wallhere.com/photos/bb/a6/2560x1080_px_nature_photography_ultra_wide-824295.jpg!d',
            idx: 0,
            alt: 'carousel-first',
            heading: 'First Image'
        },
        {
            image: 'https://c.wallhere.com/photos/bb/a6/2560x1080_px_nature_photography_ultra_wide-824295.jpg!d',
            idx: 1,
            alt: 'carousel-first',
            heading: 'Second Image'
        },
        {
            image: 'https://c.wallhere.com/photos/bb/a6/2560x1080_px_nature_photography_ultra_wide-824295.jpg!d',
            idx: 2,
            alt: 'carousel-first',
            heading: 'Second Image'
        }
    ]
    }) => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className='carousel-inner'>
                {carousels.map(carousel => 
                    <div className={`carousel-item ${carousel.idx === 0 && 'active'}`}>
                        <img src={carousel.image} className='d-block w-100' alt={carousel.alt} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{carousel.heading}</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                )}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default ContentCarousel;
