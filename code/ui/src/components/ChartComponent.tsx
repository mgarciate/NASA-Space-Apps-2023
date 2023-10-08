import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  name: number;
  [key: string]: number | string;  // This allows for dynamic keys like column2, column3, etc.
}

type ChartProps = {
    data: DataPoint[];
    lines: string[];
};

// Array of colors
const colors = [
  '#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#413ea0', '#a4de6c', '#d0ed57',
  '#ffc658', '#00c49f', '#ffbb28', '#ff8042', '#00bcd4', '#8dd1e1', '#82ca9d',
  '#a4de6c', '#d0ed57', '#ffb726', '#ff5252', '#ff4081', '#e040fb', '#7c4dff',
  '#536dfe', '#448aff', '#40c4ff', '#18ffff', '#64ffda', '#69f0ae', '#b2ff59',
  '#eeff41', '#c6ff00', '#ffea00', '#ffd740', '#ffa726'
];

const ChartComponent: React.FC<ChartProps> = ({ data, lines }) => {
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
        <LineChart width={1000} height={500} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {/* Add Lines for each column */}
          {Array.from({ length: 33 }).map((_, index) => (
            <Line 
              type="monotone" 
              dataKey={`column${index + 2}`} 
              stroke={colors[index % colors.length]} 
              dot={false}
              key={index} />
          ))}
        </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default ChartComponent;
