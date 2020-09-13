import React from 'react';
import {Link} from 'react-router-dom';
import './LgTextBgImage.css';

const LgTextBgImage = (props) => {
    return (
        <div className={`lg-text-bg-image-container ${props.outputClass}`}>
            <div className='container'>
                <section className='text-center'>
                    <p className={`${props.headerClass}`}>{props.text}</p>
                    <Link to={`/${props.btnRef}`} 
                        className={`btn btn-lg ${props.btnOutline ? 'btn-outline-primary' : 'btn-primary'}`}
                    >
                        {props.btnText}
                    </Link>
                </section>
            </div>
        </div>
    );
}

export default LgTextBgImage;