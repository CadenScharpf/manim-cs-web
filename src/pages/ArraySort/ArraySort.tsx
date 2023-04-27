import React, { useState } from "react";
import ISortableData from "../../components/SortableList/ISortableData";
import { SortableList } from "../../components";
import { createRange } from "../../utilities";
import "../../styles.css";
import { useTheme } from "@mui/material";

const initialData: ISortableData[] = [
  { id: "1", value: "7" },
  { id: "2", value: "6" },
  { id: "3", value: "5" },
  { id: "4", value: "4" },
  { id: "5", value: "7" },
  /*     { id: '6', value: '6' },
    { id: '7', value: '5' },
    { id: '8', value: '4' }, */
];

function getMockItems() {
  return createRange(3, (index) => ({
    id: index + 1,
    data: Math.floor(Math.random() * 10),
  }));
}

export default function ArraySort() {
  const [items, setItems] = useState(initialData);
  const theme = useTheme();

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      { id: String(prevItems.length + 1), value: "" },
    ]);
  };

  const handleRemoveLastItem = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.pop();
      return newItems;
    });
  };

  return (
    <div style={{ /* maxWidth: 400, */ margin: "30px auto" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button onClick={handleAddItem}>Add Item</button>
          <button onClick={handleRemoveLastItem}>Remove Last Item</button>
        </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: '0px' }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingRight: '100px' }}>
          <h3 style={{paddingRight: '10px' }}>Objects:</h3> <label>0</label>
        </div>
        
        
      </div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id} value={item.value}>
            <input
              type="numeric"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                background: "transparent",
                fontSize: "1.5rem",
                textAlign: "center",
                appearance: "textfield",
                color: theme.palette.text.primary,
                paddingBottom: "10px",
                alignSelf: "center",
              }}
              inputMode="numeric"
              maxLength={3}
              placeholder="_"
              value={undefined}
              onChange={() => { }}
            />
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
    </div>
  );
}
