import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Quizzes from '../Quizzes/Quizzes';
import { useLoaderData } from 'react-router-dom';


const Dashboard = () => {
    // set data using useLoaderData
    const allQuizzes = useLoaderData();
    // set data as array of object from object of object
    const quizzes = allQuizzes.data

    return (
        <div>
            <Header></Header>
            <div className='my-32 mx-24 md:grid grid-cols-4 gap-3'>
                {
                    // loop through to send quiz data
                    quizzes.map(quiz => <Quizzes
                        key={quiz.id}
                        quiz={quiz}
                    ></Quizzes>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;