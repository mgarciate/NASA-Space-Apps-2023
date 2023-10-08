import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type DataPoint = {
    name: string;
    [key: string]: number | string;
};

type ChartProps = {
    data: DataPoint[];
    lines: string[];
};

const ChartComponent: React.FC<ChartProps> = ({ data, lines }) => {
    return (
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {lines.map((lineKey, index) => (
              <Line 
                key={lineKey} 
                type="monotone" 
                dataKey={lineKey} 
                stroke={index === 0 ? "#FFD700" : "#1E90FF"}
                strokeWidth={2}
              />
            ))}
            <CartesianGrid stroke="#aaa" strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

export default ChartComponent;
