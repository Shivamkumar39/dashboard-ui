import React from 'react';
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
from 'react-icons/bs';
import 
{ BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
from 'recharts';

function Home() {

    const data = [
        {
          name: 'Karnataka',
          male: 4000,
          female: 2400,
        },
        {
          name: 'Delhi',
          male: 3000,
          female: 1398,
        },
        {
          name: 'Bihar',
          male: 9800,
          female: 5000,
        },
        {
          name: 'UP',
          male: 2780,
          female: 3908,
        },
        {
          name: 'UK',
          male: 1890,
          female: 4800,
        },
        {
          name: 'Punjab',
          male: 2390,
          female: 3800,
        },
        {
          name: 'Gujarat',
          male: 3490,
          female: 4300,
        },
    ];
     
    const Rapedata = [
        {
          name: 'Karnataka',
          female: 2400,
        },
        {
          name: 'Delhi',
          female: 1398,
        },
        {
          name: 'Bihar',
          female: 5000,
        },
        {
          name: 'UP',
          female: 3908,
        },
        {
          name: 'UK',
          female: 4800,
        },
        {
          name: 'Punjab',
          female: 3800,
        },
        {
          name: 'Gujarat',
          female: 4300,
        },
    ];
     
    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Danger Zone</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Male/Female</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Camera</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Alerts in 24h</h3>
                        <BsFillBellFill className='card_icon'/>
                    </div>
                    <h1>42</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
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
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="male" fill="#8884d8" />
                        <Bar dataKey="female" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={Rapedata}
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
                        <Line type="monotone" dataKey="female" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </main>
    );
}

export default Home;
