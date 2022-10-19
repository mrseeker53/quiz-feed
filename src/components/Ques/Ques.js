import React from 'react';
import { Radio } from "@material-tailwind/react";
import { EyeIcon } from '@heroicons/react/24/solid';
import toast, { Toaster } from 'react-hot-toast';

const Ques = ({ id, ques }) => {
    // Destructuring ques
    const { correctAnswer, question, options } = ques;
    console.log(options)

    // Display selected option is right or wrong answer
    // const answer = (option) => {
    //     const result = ({ option } === { correctAnswer }) ? 'Right' : 'Wrong',
    //         toast.success(result);
    // };

    // Display correct answer click on eye icon using Toast
    const correct = () => toast.success(correctAnswer, {
        style: {
            border: '3px solid lightblue',
            padding: '24px',
            fontSize: '21px',
            transitionDuration: '500',
        }
    });

    return (
        <div className="w-auto md:w-4/5 mx-auto mt-20 rounded-md overflow-hidden shadow-md">
            {/* Set Eye Icon */}
            <EyeIcon onClick={correct} className="h-6 w-6 ml-8 mt-4 hover:cursor-pointer" />
            <Toaster />

            {/* Display Quiz question */}
            <div className="w-full px-6 md:px-24 pb-12 text-center">
                <p className="text-2xl w-auto">Quiz {id}: {question}</p>
            </div>
            {/* Display options */}
            <div className='grid grid-cols-2 pb-12 px-6 md:px-24 gap-3 text-lg'>
                {
                    options.map(option =>
                        <div className='border rounded py-4 px-4 flex items-center'
                            onClick={() => {
                                // conditions as ternary operator
                                const result = (option === correctAnswer) ? 'Right answer' : 'Wrong answer';
                                // Notify as toast
                                toast.success(result);
                            }}>
                            <Toaster />
                            {/* add radio button for option */}
                            <Radio
                                className='mr-2'
                                name='type'
                            />
                            <label className='text-start text-xl hover:cursor-pointer '>
                                {option}
                            </label>

                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default Ques;