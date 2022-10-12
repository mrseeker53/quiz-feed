import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from '../Ques/Ques';

const Quiz = () => {
    const quiz = useLoaderData();
    const quizDetails = quiz.data;
    const { id, name, questions } = quizDetails;
    console.log(quizDetails)


    return (
        <div className=''>
            <h3 className='text-2xl font-bold mb-8'>Quiz of {name}</h3>
            {
                questions.map(question => <Ques
                    key={id}
                    question={question}
                ></Ques>)
            }
        </div>
    );
};

export default Quiz;