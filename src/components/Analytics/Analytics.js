import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Analytics = () => {
    // Set data
    const data = useLoaderData();
    const quizzes = data.data;
    console.log(quizzes)

    return (
        <div className='mt-24 md:ml-20'>
            <LineChart width={400} height={350} data={quizzes}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Analytics;