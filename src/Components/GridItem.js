import React from 'react';
import './GridItem.css';

const GridItem = ({gridType, itemName, itemImage, itemText}) => {
    return (
        <div className="card">
            <img src={itemImage} className='card-img-top' alt={`${itemName}`} />
            <div className={gridType === 'service' ? 'card-body services-grid-item' : 'card-body p-2'}>
                {gridType === 'service' ? 
                    <button className='btn btn-block btn-primary'>{itemName}</button> : <h5 className="card-title text-center">{itemName}</h5>
                }
                <p className="card-text">{itemText}</p>
            </div>
        </div>
    );
}

export default GridItem;