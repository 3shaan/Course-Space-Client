import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    
    return (
        <div className='w-10/12 mx-auto mt-10'>
            <div>
            <p className='text-4xl text-center my-5'>This is the Line Chart of Our Course : </p>
        </div>
        <div>
        <BarChart
          width={700}
          height={500}
          data={data.data}
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
          <Bar dataKey="total" fill="#8884d8" />
          <Bar dataKey="id" fill="#82ca9d" />
        </BarChart>
      </div>
        </div>
    );
};

export default Statistics;