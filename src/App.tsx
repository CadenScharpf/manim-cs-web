import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArraySort from './pages/ArraySort/ArraySort';

class App extends React.Component {

  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<ArraySort />} />
            <Route path="/home" element={<h1>dsf</h1>} />
            <Route path="*" element={<ArraySort />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
