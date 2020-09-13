import React from 'react';
import GridItem from './GridItem';
import './MentorGrid.css';

const MentorsGrid = ({mentors = [
    'Mentor 1', 'Mentor 2', 'Mentor 3', 'Mentor 4', 'Mentor 5', 'Mentor 6', 'Mentor 7', 'Mentor 8'
]}) => {
    return (
        <div className='mentor-grid'>
            <div className='container'>
                <h3 className='text-center'>TEAM AND MENTORS</h3>
                <div className='row mt-2 justify-content-sm-center'>
                    {mentors.map(mentor =>
                        <div className='col-6 col-sm-6 col-md-4 col-lg-3 my-4 mentor-grid-item'>
                            <GridItem
                                gridType='mentor'
                                itemText='This is a longer card with supporting text below as a natural lead-in to additional content.'
                                itemImage='https://image.flaticon.com/icons/png/512/1674/1674291.png'
                                itemName={mentor}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MentorsGrid;