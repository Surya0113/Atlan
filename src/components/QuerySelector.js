import React from 'react';

const QuerySelector = ({ queries, onSelectQuery }) => {
  return (
    <div>
      <label>Select Query:</label>
      <select onChange={(e) => onSelectQuery(e.target.value)}>
        {queries.map((query, index) => (
          <option key={index} value={index}>
            {query}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuerySelector;