import React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import useGraph from '../../hooks/useGraph';
const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};
const Dashboard = () => {
  const [data] = useGraph();
  return (
    <div className="container mx-auto px-4 sm:px-0 pt-10 grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10">
      {/* line charts */}
      <div
        style={{ width: '100%', height: 500 }}
        className="shadow px-3 py-8 rounded-lg"
      >
        <ResponsiveContainer>
          <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* bar charts */}
      <div
        style={{ width: '100%', height: 500 }}
        className="shadow px-3 py-8 rounded-lg"
      >
        <ResponsiveContainer>
          <BarChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div
        style={{ width: '100%', height: 500 }}
        className="shadow px-3 py-8 rounded-lg"
      >
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="investment"
              cx="50%"
              cy="50%"
              innerRadius={130}
              outerRadius={150}
              fill="#82ca9d"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* area charts */}
      <div
        style={{ width: '100%', height: 500 }}
        className="shadow px-3 py-8 rounded-lg"
      >
        <ResponsiveContainer>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#3884d8"
              fill="#3884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#1884d8"
              fill="#a251d8"
            />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
