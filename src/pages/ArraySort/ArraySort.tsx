import React, { useState } from "react";
import { ReactDOM } from "react";


import ISortable from "../../components/Sortable/Sortable";
import { SortableList } from "../../components";
import { createRange } from "../../utilities";
import "../../styles.css";
import { SortableSquare } from "../../components/Sortable/SortableSquare";

const initialData: ISortable[] = [
    { id: '1', value: '7' },
    { id: '2', value: '6' },
    { id: '3', value: '5' },
    { id: '4', value: '4' },
  ];
  
  function getMockItems() {
    return createRange(3, (index) => ({ id: index + 1, data: Math.floor(Math.random() * 10) }));
  }

  export default function ArraySort() {
    const [items, setItems] = useState(initialData);
  
    return (
      <div style={{ maxWidth: 400, margin: "30px auto" }}>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id} value={item.value}>
            {item.value}
            
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
    );
  
    
/*   function handleDragEnd(over: DragEndEvent) {
    setParent(over ? over.id : null);
  } */
  }