import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import Quizzes from '../Quizzes/Quizzes';
import { useLoaderData } from 'react-router-dom';


const Dashboard = () => {
    const allTopics = useLoaderData();
    const topics = allTopics.data

    return (
        <div>
            <Header></Header>
            <div className='md:grid grid-cols-4 gap-3'>
                {
                    topics.map(topic => <Quizzes
                        key={topic.id}
                        topic={topic}
                    ></Quizzes>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;