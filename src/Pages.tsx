interface ListData {
    [key: string]: {
      [key: string]: string;
    };
}

const PageData: ListData = {
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
  };

  export default PageData;