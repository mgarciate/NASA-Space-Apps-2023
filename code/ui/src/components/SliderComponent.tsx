import React from 'react';

type SliderProps = {
    value: number;
    onChange: (value: number) => void;
};

const SliderComponent: React.FC<SliderProps> = ({ value, onChange }) => {
    return (
        <div>
            <input
                type="range"
                min="1"
                max="100"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ width: '100%' }}
            />
            <div className="slider-value">Value: {value}</div>
        </div>
    );
};

export default SliderComponent;
