import React, { useState } from "react";
import ISortableData from "../../components/SortableList/ISortableData";
import { SortableList } from "../../components";
import { createRange } from "../../utilities";
import "../../styles.css";
import { Button, useTheme, withStyles } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

const initialData: ISortableData[] = [
  /*{ id: "1", value: "7" },
    { id: "2", value: "6" },
   { id: "3", value: "5" },
   { id: "4", value: "4" },
   { id: "5", value: "7" },
       { id: '6', value: '6' },
     { id: '7', value: '5' },
     { id: '8', value: '4' }, */
];



function getMockItems() {
  return createRange(3, (index) => ({
    id: index + 1,
    data: Math.floor(Math.random() * 10),
  }));
}



function validateInputs(items: ISortableData[]) {
  return items.every((item) => item.value !== "" && isIntegerBetween0And999(item.value));
}

function isIntegerBetween0And999(str: string) {
  // Check if the string contains only digits
  if (!/^\d+$/.test(str)) {
    return false;
  }
  
  // Convert the string to an integer
  const num = parseInt(str, 10);
  
  // Check if the integer is between 0 and 999
  return (num >= 0 && num <= 999);
}

export default function ArraySort() {
  const [items, setItems] = useState(initialData);
  const [inputsValid, setInputsValid] = useState(validateInputs(initialData)); // Initialize inputsValid state with the validation result of initialData
  const theme = useTheme();

  const isInputsValid = () => {
    return items.length >= 2 && validateInputs(items);
  }
  
  const handleAddItem = () => {
    if(items.length >= 9) { return }
    setItems((prevItems) => [
      ...prevItems,
      { id: String(prevItems.length + 1), value: "" },
    ]);
    setTimeout(() => {
      const input = document.querySelector(`input[id="item-${items.length + 1}-input"]`) as HTMLInputElement;
      if (input) {
        input.focus();
      }
    }, 0);
  };

  const handleRemoveLastItem = () => {
    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems.pop();
      return newItems;
    });
  };

  const handleInputChange = (itemId: string, value: string) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === itemId);
      const newItems = [...prevItems];
      newItems[itemIndex] = { ...newItems[itemIndex], value };
      return newItems;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column'   }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: '0px' }}>
          <h3 style={{ paddingRight: '10px' }}>Objects:</h3> <label>{items.length}</label><label> /9</label>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton size="large" color="success" aria-label="add" onClick={handleAddItem}>
              <AddIcon />
            </IconButton>
            <IconButton color="error" aria-label="add" onClick={handleRemoveLastItem}>
              <RemoveIcon />
            </IconButton>
          </div>

        </div>


      </div>
      <SortableList
        items={items}
        onChange={setItems}
        renderItem={(item) => (
          <SortableList.Item id={item.id} value={item.value}>
            <input id={"item-" + item.id + "-input"}
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
              onChange={(e) => handleInputChange(item.id, e.target.value)}
            />
            <SortableList.DragHandle />
          </SortableList.Item>
        )}
      />
              <Button
      variant="contained"
      color="success"
      disabled={!isInputsValid()} // disable button when items array has length of less than 2
    >
      Generate Animation
    </Button>
    </div>
  );
}
