import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import MainContent from './components/MainContent/MainContent';
import SortableSquare from './components/Sortable/SortableSquare';
import SortSet from './components/Sortable/SortSet';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout >
        <Routes>
          <Route path="/" element={
          <MainContent>
            

            <SortSet/>
          </MainContent>}/>
          <Route path="/home" element={<MainContent> </MainContent>}/>
          <Route path="*" element={<h1>sddsfd</h1>}/>
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
