import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArraySort from './pages/ArraySort/ArraySort';
import { Download } from './pages/Download/Download';
import { Home } from './pages/Home/Home';


class App extends React.Component {

  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/algorithms/sorting/:sortingAlgorithm" element={<ArraySort />} />
            <Route path="*" element={<h1>Coming Soon...</h1>} />
            <Route path="/download/:filename" element={<Download/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
