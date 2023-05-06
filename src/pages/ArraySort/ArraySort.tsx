import React, { useState } from "react";
import ISortableData from "../../components/SortableList/ISortableData";
import { SortableList } from "../../components";
import { createRange } from "../../utilities";
import "../../styles.css";
import { Button, useTheme, withStyles } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import { SortableData } from "@dnd-kit/sortable";
import { AnimationLoading } from "../../components/AnimationLoading/AnimationLoading";
import {  useLocation, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";




const initialData: ISortableData[] = [
  /* { id: "1", value: "7" },
      { id: "2", value: "6" },
      { id: "3", value: "5" },
     { id: "4", value: "4" },
     { id: "5", value: "7" },
         { id: '6', value: '6' },
       { id: '7', value: '5' },
       { id: '8', value: '4' }, */
];

const implemented = ["Bubble Sort", "Selection Sort"]

// AWS EC2 instance
const baseUrl = 'http://ec2-13-57-239-150.us-west-1.compute.amazonaws.com:80';

// Localhost
//const baseUrl = 'http://localhost:80';

const endpoint = '/arraysort';

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

export default function ArraySortWrapper() {
    const location = useLocation();
    const { pathname } = location;
    let navigate = useNavigate();

    interface ApiResult {
        success: boolean;
        message: string;
    }

    let submit = async (items: ISortableData[]) => {
       
        const sp = pathname.split('/')
        const _algorithm = sp[sp.length - 1].toLowerCase().replace(/%20/g, '-')
        const _inputValues = items.map((item) => parseInt(item.value));
        setContent(<AnimationLoading/>)
        const requestBody = {
            algorithm: _algorithm,
            inputValues: _inputValues,
          };
          const url = `${baseUrl}${endpoint}`;
        
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify(requestBody),
          });
        
          const data: ApiResult = await response.json();


            console.log(data);
            let animationUri = null;
            if(data.success) {
                animationUri = data.message? data.message : null;
            }
            else {
                animationUri = null;
            }

            if(animationUri === null) {
                setContent(<div><h3>An unknon error has occured</h3><p>{data.message? data.message : ""}</p></div>) 
                return
            }

            return navigate(`/download/${animationUri}`);
    }

    const [content, setContent] = useState(<ArraySort submit={submit}/>);
    return (
        content
    )

}

interface IArraySortProps {
   submit: (items: ISortableData[]) => void;
}


const ArraySort: React.FC<IArraySortProps> = ({submit}) => {
    const [items, setItems] = useState(initialData);
    const [inputsValid, setInputsValid] = useState(validateInputs(initialData)); // Initialize inputsValid state with the validation result of initialData
    const theme = useTheme();
    
    const isInputsValid = () => {
        return items.length >= 2 && validateInputs(items);
    }
    
    const handleAddItem = () => {
        if (items.length >= 9) { return }
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
    
    const renderItem = (item: ISortableData) => (
    
        <SortableList.Item id={item.id} value={item.value}>
            <input id={"item-" + item.id + "-input"}
                type="numeric"
                style={{ width: "100%", height: "100%", border: "none", background: "transparent", fontSize: "1.5rem", textAlign: "center", appearance: "textfield", color: theme.palette.text.primary, paddingBottom: "10px", alignSelf: "center", }}
                inputMode="numeric"
                maxLength={3}
                placeholder="_"
                value={item.value}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
            />
            <SortableList.DragHandle />
        </SortableList.Item>
    )

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', position: 'relative'}}>
                <div id="quantityControlPanel" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: '0px' }}>
                    <h3 style={{ paddingRight: '10px' }}>Objects:</h3> <label>{items.length}</label><label> /9</label>
                    <div id="addRemoveGroup" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <IconButton size="large" color="success" aria-label="add" onClick={handleAddItem}>
                            <AddIcon />
                        </IconButton>
                        <IconButton color="error" aria-label="add" onClick={handleRemoveLastItem}>
                            <RemoveIcon />
                        </IconButton>
                    </div>

                </div>

            <SortableList items={items} onChange={setItems} renderItem={renderItem}/>
            <Button variant="contained" color="success" onClick={()=> {submit(items)}} disabled={!isInputsValid()}>
                Generate Animation
            </Button>
        </div>
    );

}
