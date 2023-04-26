import { Theme, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ISortable from './Sortable';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface ISortableProps {
  data?: number,
}

interface ISortableState {
  data?: number

}

export class SortableSquare extends React.Component<ISortableProps, ISortableState> {
  /* theme: Theme = useTheme(); */
  constructor(props: ISortableProps) {

    super(props);
    this.state = {
      data: props.data? props.data : undefined
    }
  }

  render(): React.ReactNode {
      return (
        
        <svg width="200" height="200" >
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
                  /* color: this.theme.palette.text.primary, */
                }}
                inputMode="numeric"
                maxLength={3}
                placeholder="_"
                value={this.state.data? this.state.data : undefined}
                onChange={() => { }}
              />
            </div>
          </foreignObject>
        </svg>
      )
  }
}

