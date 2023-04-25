import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { DragDropContext, Droppable, Draggable, DraggableProvided, DraggableStateSnapshot, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';
import SortableSquare from './SortableSquare';

interface Square {
  id: string;
  value: string;
}

const initialSquares: Square[] = [
  { id: '1', value: '' },
  { id: '2', value: '' },

];

const SortSet = () => {
  const theme = useTheme();
  const [squares, setSquares] = useState<Square[]>(initialSquares);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newSquares = Array.from(squares);
    const [movedSquare] = newSquares.splice(result.source.index, 1);
    newSquares.splice(result.destination.index, 0, movedSquare);
    setSquares(newSquares);
  };

  return (
    
    <Droppable droppableId="squares" direction="horizontal">
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div ref={provided.innerRef} {...provided.droppableProps} style={{ display: 'flex' }}>
          {squares.map((square, index) => (
            <Draggable key={square.id} draggableId={square.id} index={index}>
              {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={{ margin: theme.spacing(1), ...provided.draggableProps.style }}
                >
                  <SortableSquare/>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>

  );
};

export default SortSet;
