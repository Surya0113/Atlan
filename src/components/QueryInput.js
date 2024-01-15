import React from 'react';
import './Queryinput.css'
const QueryInput = ({ query, onQueryChange, onRunQuery }) => {
  return (
    <div className='queryinput'>
      <textarea
        rows={5}
        cols={50}
        placeholder="Enter your SQL query..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <button className='buttonrun' onClick={onRunQuery}>Run Query</button>
    </div>
  );
};

export default QueryInput;