import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Analytics = () => {
    // Set data
    const data = useLoaderData();
    // Set data as array of object from object of object
    const quizzes = data.data;
    // console.log(quizzes)

    return (
        <div className='mt-24 md:ml-20'>
            {/* set width, height & quiz data for chart */}
            <LineChart width={400} height={350} data={quizzes}>
                {/* total quiz */}
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                {/* quiz name */}
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Analytics;