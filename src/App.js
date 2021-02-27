import './App.css';
import React from 'react';
import { DataList } from './components/DataList';
import { GlobalState } from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <main>
        <DataList />
      </main>
    </GlobalState>

  );
}

export default App;
