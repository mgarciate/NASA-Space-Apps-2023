import React, { useState, useEffect } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import SliderComponent from './components/SliderComponent';
import { withResizeDetector } from 'react-resize-detector';
import Swal from 'sweetalert2';
import jsonData from './data/data_in_json_format.json';

interface DataPoint {
  name: number;
  [key: string]: number | string;  // This allows for dynamic keys like column2, column3, etc.
}

function App() {
  const [sliderValue, setSliderValue] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;

      setSliderValue((prevValue) => {
        if (prevValue === 50) {
          Swal.fire({
            title: 'Reached warning values!',
            text: 'The slider value has reached 50.',
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
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const transformedData: DataPoint[] = jsonData[0].map((name: number, index: number) => {
      let obj: DataPoint = { name };
      for (let i = 1; i < jsonData.length; i++) {
        if (jsonData[i][0] > 1658053200) {
          break;
        }
        obj[`column${i + 1}`] = jsonData[i][index];
      }
      return obj;
    });
    setData(transformedData);
  }, []);

  return (
    <div className="App">
      <h2>Storm Destroyers ☀️🌞😎</h2>
      <p className="description">Storm Destroyers visualizes data from the Experimental Data Repository, offering real-time insights into solar activities. Users can track key metrics and trends, ensuring timely awareness. Be alert: the oracle will signal impending solar storms!</p>
      <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <SliderComponent value={sliderValue} onChange={setSliderValue} />
        </div>
        <button className="pause-button" onClick={() => setIsPaused(!isPaused)} dangerouslySetInnerHTML={{ __html: isPaused ? '▶' : '&#10074;&#10074;' }}>
        </button>
      </div>

      <div className="container chart-container">
        <ChartComponent data={data} lines={['line1', 'line2']} />
      </div>
    </div>
  );
}

export default withResizeDetector(App);
