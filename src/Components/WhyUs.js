import React from 'react';
import './WhyUs.css';

const WhyUs = ({reasons = [
    'Professional', 'Experienced', 'Technophile', 'Efficient', 'Fun'
]}) => {
    return (
        <div className='text-center why-us-wrapper'>
            <h1 className='display-4'>WHY US?</h1>
            <div className='row justify-content-around'>
                {reasons.map(reason => 
                    <div className="col-10 col-sm-5 col-xl-2 card text-white bg-dark mb-3">
                        <div className="card-header">{reason}</div>
                        <div className="card-body text-white">
                            <p className="card-text p-0">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WhyUs;