import React, {useState} from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const serverUrl = 'http://localhost:3001'

  const search = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`${serverUrl}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(query),
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>JSON Search App</h1>
        <SearchForm onSearch={search} />
        {loading ? <p>Loading...</p> : <SearchResults results={results} />}
      </div>
    </div>
  );
}

export default App;
