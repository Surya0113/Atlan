import './App.css';
import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import QueryResult from './components/QueryResult';
import QuerySelector from './components/QuerySelector';

const App = () => {
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);

  const predefinedQueries = [
    'SELECT * FROM customers',
    'SELECT product_name, price FROM products',
  ];

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleRunQuery = () => {
    // Simulate query execution with mock data
    const mockResults = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];
    setQueryResults(mockResults);
  };

  const handleSelectQuery = (index) => {
    setSelectedQueryIndex(index);
    setQuery(predefinedQueries[index]);
  };

  return (
    <div className='maindiv'>
      <header>
        <h1>SQL Query Runner</h1>
      </header>
      <main>
        <QueryInput
          query={query}
          onQueryChange={handleQueryChange}
          onRunQuery={handleRunQuery}
        />
        <QuerySelector
          queries={predefinedQueries}
          onSelectQuery={handleSelectQuery}
        />
        <QueryResult results={queryResults} />
      </main>
   
    </div>
  );
};

export default App;