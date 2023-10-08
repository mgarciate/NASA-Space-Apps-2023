import React, { useState, useEffect } from 'react';
import './App.css';
import ChartComponent from './components/ChartComponent';
import SliderComponent from './components/SliderComponent';
import { withResizeDetector } from 'react-resize-detector';
import Swal from 'sweetalert2';

function App() {
  const [sliderValue, setSliderValue] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState([
    { name: 'A', line1: 50, line2: 30 },
    { name: 'B', line1: 60, line2: 40 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused) return;

      setSliderValue((prevValue) => {
        if (prevValue === 50) {
          Swal.fire({
            title: 'Reached 50!',
            text: 'The slider value has reached 50.',
            icon: 'success',
            confirmButtonText: 'Cool'
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
    const newData = data.map((point) => ({
      ...point,
      line1: point.line1 + sliderValue,
      line2: point.line2 + sliderValue,
    }));
    setData(newData);
  }, [sliderValue, data]);

  return (
    <div className="App">
      <h2>Storm Destroyers</h2>
      <p className="description">Here is a brief description about Storm Destroyers. You can provide more details or customize this text as needed.</p>
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
