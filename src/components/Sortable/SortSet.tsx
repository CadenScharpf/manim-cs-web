import React from 'react';
import ISortable from './Sortable';

import {useDroppable} from '@dnd-kit/core';

interface Props {
  id: string;
  children: React.ReactNode;
}

export default function SortSet(props: Props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

