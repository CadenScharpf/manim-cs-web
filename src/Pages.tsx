interface ListData {
    [key: string]: {
      [key: string]: string;
    };
}

const PageData: ListData = {
    "Sorting": {
      "Bubble Sort": "bubbleSort",
      "Selection Sort": "selectionSort",
      /* "Insertion Sort": "insertionSort",
      "Merge Sort": "mergeSort", */
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
  };

  export default PageData;