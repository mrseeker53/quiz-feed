import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-auto gap-3 mb-12 mx-36'>
            <details className='bg-blue-50 rounded-lg flex justify-center pb-4 px-20'>
                <summary className='py-4 flex justify-between duration-200 ease-in'>
                    1. How does React works?
                </summary>
                <hr />
                <div className='py-4 px-6 text-md '>ReactJS Router is mainly used for <strong>developing Single Page Web Applications.</strong> React Router is used to define multiple routes in the application. It is a state container for the current location , or URL. It keeps track of the location and renders different Routes as it changes, and it also gives you tools to update the location using Links and the history API.
                </div>
            </details>
        </div>
    );
};

export default Blog;