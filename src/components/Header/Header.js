import React from 'react';
import header from '../../Header.png'

const Header = () => {
    return (
        <div className='ml-12 md:flex justify-around items-center'>
            <img className='w-auto md:w-2/3' src={header} alt="" />
            <div>
                <p className='text-5xl font-semibold text-blue-400 w-2/3 mx-3 mb-8'>Technical Quizzes to strong your technical knowledge</p>
                <button className='bg-blue-600 hover:bg-teal-500 text-white rounded-md px-4 py-2 ml-12'>Start Quiz</button>
            </div>
        </div>
    );
};

export default Header;