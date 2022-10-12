import React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div className=' mt-10'>
            <div>
            <p className='text-xl lg:text-4xl text-center my-5'>This is the Line Chart of Our Course : </p>
        </div>
        <div>
          <ResponsiveContainer width={400} height={300} className='w-1/2 mx-auto' >
          <BarChart
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
          </ResponsiveContainer>
        
      </div>
        </div>
    );
};

export default Statistics;