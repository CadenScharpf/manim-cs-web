import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { DragDropContext, Droppable, Draggable, DraggableProvided, DraggableStateSnapshot, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import SortableArrayElement from './SortableSquare';
import React from 'react';
import ISortable from './Sortable';

interface Props {
  initialData: ISortable[],
  index: number,
}
interface IState {
  elements: ISortable[],
  size: number,
  index: number,
}


class SortSet extends React.Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      elements: props.initialData,
      size: props.initialData.length,
      index: props.index,
    };
    

  }

  render() {
    return (
      <div id="container">
        <h3>Objects: </h3>
      <Droppable droppableId={this.state.index.toString()}>
        {(provided: DroppableProvided) => (
          <div className="sortableArray" 
          ref={provided.innerRef}
          {...provided.droppableProps} 
          >
            {this.state.elements.map((item, index) => (<SortableArrayElement data={item} index={index} key={item.id} />))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      </div>
    );
  }
};

export default SortSet;
