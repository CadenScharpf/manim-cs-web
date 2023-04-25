import { useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';

const SortableSquare: React.FC = () => {
  const theme = useTheme();
  const [squareValue, setSquareValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSquareValue(event.target.value);
  };

  return (
    <div>
       <svg width="200" height="200">
        <rect x="5" y="5" width="100" height="100" stroke="#fff" strokeWidth="5" fill="transparent" />
        <foreignObject x="5" y="5" width="100" height="100">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <input
              type="numeric"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                background: 'transparent',
                fontSize: '1.5rem',
                textAlign: 'center',
                appearance: 'textfield',
                color: theme.palette.text.primary,
              }}
              inputMode="numeric"
              maxLength={3}
              placeholder="_"
              value={squareValue}
              onChange={handleChange}
            />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default SortableSquare;  
