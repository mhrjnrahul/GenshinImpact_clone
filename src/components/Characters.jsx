
import { useState, useEffect } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/characters')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.characters);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Characters</h1>
      {characters.map(char => (
        <div key={char.id}>
          <h2 className='text-white'>{char.name}</h2>
          <p>{char.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Characters;