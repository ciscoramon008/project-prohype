import React from 'react';
import './ClientIdeaPage.css';

const ClientIdeaPage = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='client-idea-container container my-5'>
            <h2>Tell us about your idea!</h2>
            <form onSubmit={handleSubmit}>
                <div className='client-idea-form-container'>
                    <div className='row'>
                        <div className='col-12 my-2 col-md-6 my-md-3'>
                            <input type='text' className='form-control' placeholder='Name' />
                        </div>
                        <div className='col-12 my-2 col-md-6 my-md-3'>
                            <input type='text' className='form-control' placeholder='Organization' />
                        </div>
                        <div className='col-12 my-2 col-md-6 my-md-3'>
                            <input type='email' className='form-control' placeholder='Email' />
                        </div>
                        <div className='col-12 my-2 col-md-6 my-md-3'>
                            <input type='text' className='form-control' placeholder='Phone' />
                        </div>
                    </div>
                    <textarea className='form-control mt-3' style={{width: '100%'}} placeholder='Tell us about your idea.'></textarea>
                    <button className='btn btn-outline-success mt-4'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default ClientIdeaPage;