import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const marksArray = [
        {
            id: 1,
            name: "Student 1",
            physics: 75,
            chemistry: 85,
            math: 90
        },
        {
            id: 2,
            name: "Student 2",
            physics: 80,
            chemistry: 70,
            math: 95
        },
        {
            id: 3,
            name: "Student 3",
            physics: 90,
            chemistry: 80,
            math: 75
        },
        {
            id: 4,
            name: "Student 4",
            physics: 65,
            chemistry: 75,
            math: 85
        },
        {
            id: 5,
            name: "Student 5",
            physics: 70,
            chemistry: 90,
            math: 80
        },
        {
            id: 6,
            name: "Student 6",
            physics: 85,
            chemistry: 65,
            math: 70
        },
        {
            id: 7,
            name: "Student 7",
            physics: 80,
            chemistry: 90,
            math: 85
        },
        {
            id: 8,
            name: "Student 8",
            physics: 75,
            chemistry: 85,
            math: 90
        },
        {
            id: 9,
            name: "Student 9",
            physics: 90,
            chemistry: 70,
            math: 80
        },
        {
            id: 10,
            name: "Student 10",
            physics: 70,
            chemistry: 75,
            math: 95
        },
        {
            id: 11,
            name: "Student 11",
            physics: 80,
            chemistry: 85,
            math: 65
        },
        {
            id: 12,
            name: "Student 12",
            physics: 75,
            chemistry: 90,
            math: 70
        }
    ];

    return (
        <div>
            <h2 className='text-4xl'>Line Chart</h2>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="physics" stroke="#82ca9d" />
                <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
            </LineChart>
            <h2 className='text-4xl'>Bar Chart</h2>
            <BarChart width={1000} height={300} data={marksArray}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Bar dataKey="math" fill="#8884d8" />
                <Bar dataKey="physics" fill="#82ca9d" />
                <Bar dataKey="chemistry" fill="#ffc658" />
                <Tooltip />
                <Legend />
                <YAxis />
            </BarChart>
        </div>
    );
};

export default DashBoard;