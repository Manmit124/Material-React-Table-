import React from 'react';
import { DataTable } from './components/DataTable';
import { mockUsers, tableConfig } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <DataTable data={mockUsers} config={tableConfig} />
      </div>
    </div>
  );
}

export default App;