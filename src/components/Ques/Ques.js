import React from 'react';

const Ques = ({ questions }) => {
    const { id, question, options } = questions;
    console.log(question)


    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-6 mb-6">
                <p className="text-2xl mb-2">Quiz {id}:</p>
                <p className="text-xl mb-2"> {question}</p>
            </div>
            <div className='grid grid-cols-2'>
                <p></p>
            </div>
        </div>
    );
};

export default Ques;