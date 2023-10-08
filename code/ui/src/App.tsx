import React, { useState, useEffect } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import SliderComponent from './components/SliderComponent';
import { withResizeDetector } from 'react-resize-detector';
import Swal from 'sweetalert2';
import jsonData from './data/data_in_json_format.json';

interface DataPoint {
  name: string;
  [key: string]: number | string;  // This allows for dynamic keys like column2, column3, etc.
}

function App() {
  const [sliderValue, setSliderValue] = useState(1);
  const [sliderName, setSliderName] = useState<string>('');
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState<DataPoint[]>([]);
  const [currentXValue, setCurrentXValue] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;

      setSliderValue((prevValue) => {
        if (prevValue === 50) {
          Swal.fire({
            title: 'Reached warning values!',
            text: 'The strength and speed of the solar wind in space registered from several entries predict geomagnetic storms in the coming days',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        }
        if (prevValue >= 100) {
          clearInterval(interval);
          return prevValue;
        }
        return prevValue + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const transformedData: DataPoint[] = jsonData[0].map((timestamp: number, index: number) => {
      const date = new Date(timestamp * 1000);  // Convert to milliseconds
      const formattedName = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

      let obj: DataPoint = { name: formattedName };
      for (let i = 1; i < jsonData.length; i++) {
        // if (jsonData[i][0] > (timestamp + (2 * 86400))) {
        //   break;
        // }
        obj[`column${i + 1}`] = jsonData[i][index];
      }
      return obj;
    });
    setData(transformedData);
  }, []);

  useEffect(() => {
    const length = jsonData[0].length;
    const prop = length / 100
    const index = Math.floor(sliderValue * prop)
    const date = new Date(jsonData[0][index] * 1000);  // Convert to milliseconds
    const formattedName = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const longFormattedName = `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    setSliderName(longFormattedName);
    setCurrentXValue(formattedName);
  }, [sliderValue]);

  return (
    <div className="App">
      <h2>Storm Destroyers ☀️🌞😎</h2>
      <p className="description">Storm Destroyers visualizes data from the Experimental Data Repository, offering real-time insights into solar activities. Users can track key metrics and trends, ensuring timely awareness. Be alert: the oracle will signal impending solar storms!</p>
      <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <SliderComponent value={sliderValue} name={sliderName} onChange={setSliderValue} />
        </div>
        <button className="pause-button" onClick={() => setIsPaused(!isPaused)} dangerouslySetInnerHTML={{ __html: isPaused ? '▶' : '&#10074;&#10074;' }}>
        </button>
      </div>

      <div className="container chart-container">
        <ChartComponent data={data} lines={['line1', 'line2']} xValue={currentXValue} />
      </div>
    </div>
  );
}

export default withResizeDetector(App);
