import React, { useState } from 'react'; // import { allFormations } from '../../src/constants/all-formations';
import Formation, { allFormations } from '../../src/index';
import './App.css';

function App() {
  const [formation, setFormation] = useState(allFormations[0]);

  const handleChange = (event) => {
    setFormation(event.target.value);
  };

  const handlePositionSelection = (position) => {
    console.log(position);
  };

  return (
    <div className="App">
      <select value={formation} onChange={handleChange}>
        {[...new Set(allFormations)].map((form) => (
          <option key={form} value={form}>
            {form}
          </option>
        ))}
      </select>
      <br />
      <br />
      <Formation
        formation={formation}
        onPositionSelection={handlePositionSelection}
      />
    </div>
  );
}

export default App;
