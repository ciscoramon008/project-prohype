import React from 'react';
import {Link} from 'react-router-dom';
import GridItem from './GridItem';
import './ServicesGrid.css';

const ServicesGrid = ({
        services = ['Service 1', 'Service 2', 'Service 3', 'Serivce 4']
    }) => {
    return (
        <div className='services-grid'>
            <div className='container'>
                <h1 className='text-center services-heading'><Link className='service-grid-link' to='/services'>SERVICES WE OFFER</Link></h1>
                <div className='row justify-content-around justify-content-sm-center'>
                    {services.map(service =>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-3 my-2'>
                            <GridItem
                                gridType='service'
                                itemText='Some example text of what this service is all about.'
                                itemImage='https://icons.iconarchive.com/icons/diversity-avatars/avatars/512/batman-icon.png'
                                itemName={service}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}

export default ServicesGrid;