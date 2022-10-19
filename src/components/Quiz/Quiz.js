import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from '../Ques/Ques';

const Quiz = () => {
    // Get data using useLoaderData() hook
    const quiz = useLoaderData();
    // Get data as array from object of object
    const quizDetails = quiz.data;
    // Destructuring quizDetails
    let { id, name, questions } = quizDetails;
    // console.log(quizDetails)

    return (
        <div className=''>
            <h3 className='text-3xl text-blue-500 font-bold mb-20'>Quiz of {name}</h3>
            {
                questions.map(ques => <Ques
                    // set unique id to key for skipping warning
                    key={ques.id}
                    // question details
                    ques={ques}
                    // send id to set quiz no
                    id={id++}
                ></Ques>)
            }

        </div>
    );
};

export default Quiz;