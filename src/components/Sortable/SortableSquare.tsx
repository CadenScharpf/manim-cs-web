import { Theme, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import ISortable from './Sortable';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

interface ISortableProps {
  data: ISortable,
  index: number,
}

interface ISortableState {
  data: ISortable
  index: number,
}


export default class SortableArrayElement extends React.Component<ISortableProps, ISortableState> {
  constructor(props: ISortableProps) {
    super(props);
    this.state = {
      data: props.data,
      index: props.index,
    };
  }
  render(): React.ReactNode {
    return (
      <Draggable draggableId={this.state.data.id} index={this.props.index}>
        {(provided: DraggableProvided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <SortableSquare
              data={this.state.data}
              index={this.props.index}  
            />
          </div>
         /*  <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <SortableSquare
              data={this.state.data}
              index={this.props.index}
            />
          </div> */

        )}
      </Draggable>
    )
  }
}

class SortableSquare extends React.Component<ISortableProps, ISortableState> {
  /* theme: Theme = useTheme(); */

  constructor(props: ISortableProps) {
    super(props);
    this.state = {
      data: props.data,
      index: props.index
    };

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
                value={this.state.data.value}
                onChange={() => { }}
              />
            </div>
          </foreignObject>
        </svg>
      )
  }
}

