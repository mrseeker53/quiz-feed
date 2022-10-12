import React from 'react';


const Quizzes = ({ topic }) => {
    const { name, logo, total } = topic;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full bg-blue-200" src={logo} alt="" />
            <div className="px-6 py-4">
                <p className="font-bold text-2xl mb-2">Topic: {name}</p>
                <p className="font-semibold text-xl mb-2">Ques: {total}</p>
                <button className='bg-blue-600 hover:bg-teal-500 text-white rounded-md px-8 py-2'>Start</button>
            </div>
        </div>
    );
};

export default Quizzes;