"use client"
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart() {

  const data = [
    {
      name: 'sunday',
      visit: 4000,
      click: 2400,
    
    },
    {
      name: 'monday',
      visit: 3000,
      click: 1398,
  
    },
    {
      name: 'tuesday',
      visit: 2000,
      click: 9800,
    
    },
    {
      name: 'wednesday',
      visit: 2780,
      click: 3908,
     
    },
    {
      name: 'thursday',
      visit: 1890,
      click: 4800,
     
    },
    {
      name: 'friday',
      visit: 2390,
      click: 3800,
     
    },
    {
      name: 'saturday',
      visit: 3490,
      click: 4300,
      
    },
  ];
  
  return (
    <main className=" text-white bg-[#0c162c] my-1 mx-1 w-full ">
      <h2 className='text-center font-bold py-2' >Weekly Recap</h2>
      <div className="h-full w-full">
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Tooltip className="border-none" />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </div>
     
    </main>
  )
}

export default Chart



