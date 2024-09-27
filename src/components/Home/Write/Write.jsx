import React, { useState } from 'react';
import ReactQuill from 'react-quill';

const Write = () => {
    const [description, setDescription] = useState('');
    return (
        <section
            className='w-[90%] md-[80%] lw:w-[60%] mx-auto py-[3rem]'>
            <input
                type="text"
                placeholder='Title'
                className='text-4xl outline-none w-full bg-inherit'
            />
            <ReactQuill
                theme="bubble"
                value={description}
                onChange={setDescription}
                placeholder='Tell Your Story...'
                className='write my-5'
            />
        </section>
    );
};

export default Write