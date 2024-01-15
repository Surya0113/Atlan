import React from 'react';

const QueryResult = ({ results }) => {
  return (
    <div>
      <h2>Query Results:</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{JSON.stringify(result)}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryResult;