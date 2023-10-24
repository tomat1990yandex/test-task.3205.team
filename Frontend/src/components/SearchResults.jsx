import React from 'react';

const SearchResults = ({ results }) => {
    return (
      <div className="search-results">
          {results.map((result, index) => (
            <div key={index} className="result-item">
                <p>Email: {result.email}</p>
                <p>Number: {result.number}</p>
            </div>
          ))}
      </div>
    );
};

export default SearchResults;
