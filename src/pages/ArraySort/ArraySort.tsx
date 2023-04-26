import React from "react";
import { ReactDOM } from "react";

import SortSet from "../../components/Sortable/SortSet";
import ISortable from "../../components/Sortable/Sortable";
import { DragDropContext } from "react-beautiful-dnd";

const initialData: ISortable[] = [
    { id: '1', value: '7' },
    { id: '2', value: '6' },
    
  ];
  
export default class ArraySort extends React.Component {
    onDragEnd(result: any) {

    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd} >
                <h1>Array Sort</h1>
                <SortSet initialData={initialData} index={0}/>
            </DragDropContext>
        )

    }
}
