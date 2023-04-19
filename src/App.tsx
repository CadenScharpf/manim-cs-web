import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';

const navStructure = {
  "Sorting": {
    "Insertion Sort": "insertionSort",
    "Selection Sort": "selectionSort",
    "Merge Sort": "mergeSort",
    "Bubble Sort": "bubbleSort"
  },
  "Searching": {
    "Linear Search": "linearSearch",
    "Binary Search": "binarySearch"
  },
  "Graph Traversal": {
    "Inorder": "inorder",
    "Preorder": "preorder",
    "Postorder": "postorder"
  },
  "Path Finding": {
    "Dijkstra": "dijkstra",
    "A*": "aStar",
  }
}


function App() {
  return (
    <div className="App">
      <Layout data={navStructure}>
        gdfgfsgfg
      </Layout>
    </div>
  );
}

export default App;
