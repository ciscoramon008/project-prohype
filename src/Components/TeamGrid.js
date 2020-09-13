import React from 'react';
import './TeamGrid.css';

const TeamGrid = () => {
    return (
        <div className='team-grid'>
            <div className='container'>
                <h2 className='text-center'>MEET THE TEAM</h2>
                <div className='teamgrid-wide-img'>
                    <img className='img-fluid' width='100%'
                        src='https://3zaq863bivfg1j13wg3yazi5-wpengine.netdna-ssl.com/wp-content/blogs.dir/198/files/2016/08/224_Mixed-group-of-people_20160814-large.jpg'
                        alt='team-1' 
                    />
                </div>
                <div className='teamgrid-wide-img'>
                    <img className='img-fluid' width='100%'
                        src='https://cdn.pixabay.com/photo/2018/05/12/11/37/team-3393037_1280.jpg'
                        alt='team-2' 
                    />
                </div>
                <div className='teamgrid-wide-img'>
                    <img className='img-fluid' width='100%'
                        src='https://filmdaily.co/wp-content/uploads/2018/06/brooklyn-nine-nine-characters.jpg'
                        alt='team-3' 
                    />
                </div>
            </div>
        </div>
        
    );
}

export default TeamGrid;