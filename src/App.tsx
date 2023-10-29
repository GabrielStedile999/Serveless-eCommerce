import React from 'react';
import { BrowserRouter} from 'react-router-dom'

import Application from './routes/Routes'; 
import Layout from './Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Application />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
