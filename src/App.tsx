import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import MainContent from './components/MainContent/MainContent';
import SortableSquare from './components/Sortable/SortableSquare';
import SortSet from './components/Sortable/SortSet';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Layout >
        <Routes>
          <Route path="/" element={ <h1>dsf</h1>}/>
          <Route path="/home" element={<h1>dsf</h1>}/>
          <Route path="*" element={<SortSet/>}/>
        </Routes>
        </Layout>
      </DragDropContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
