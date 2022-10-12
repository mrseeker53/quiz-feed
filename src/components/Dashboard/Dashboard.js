import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Quizzes from '../Quizzes/Quizzes';
import { useLoaderData } from 'react-router-dom';


const Dashboard = () => {
    const allQuizzes = useLoaderData();
    const quizzes = allQuizzes.data

    return (
        <div>
            <Header></Header>
            <div className='my-32 mx-24 md:grid grid-cols-4 gap-3'>
                {
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