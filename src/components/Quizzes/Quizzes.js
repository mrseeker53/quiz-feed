import React from 'react';
import { Link } from 'react-router-dom';


const Quizzes = ({ quiz }) => {
    const { id, name, logo, total } = quiz;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg pb-4">
            <img className="w-full bg-blue-200" src={logo} alt="" />
            <div className="px-6 py-4">
                <p className="font-bold text-2xl mb-2 over">{name}</p>
                <p className="font-semibold text-xl mb-8">Questions: {total}</p>
                <Link to={`/quiz/${id}`}>
                    <button className='bg-blue-600 hover:bg-teal-500 text-white rounded-md px-8 py-2'>Start</button>
                </Link>
            </div>
        </div>
    );
};

export default Quizzes;