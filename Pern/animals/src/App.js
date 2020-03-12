import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 id="animals"> List of animals</h1>
      <dl id="animals">
        {/* display species list here */}
      </dl>
      <label>Animal Name:</label>
      <input type="text" id="add-animal-name"/>
      <label>Scientific Name:</label>
      <input type="text" id="add-scientific-name"/>
      <label>Numbers Living:</label>
      <input type="integer" id="add-numbers-living"/>
      <label>Status Code:</label>
      <input type="text" id="add-status-code"/>
      <input type="submit"/>

      <h1 id="individual">Individual animal</h1>
      <dl id="individual">
        {/* display individual animals here */}
      </dl>
      <label>Nickname:</label>
      <input type="text" id="add-nickname-of-species"/>
      <input type="submit"/>

      <h1 id="sighting">Sighting of the animal</h1>
      <dl id="sighting">
        {/* display the sighting of the animal here */}
      </dl>
      <label>Location of Sighting:</label>
      <input type="text" id="add-location-sighted"/>
      <label>Health check: (Yes or No)</label>
      <input type="text" id="add-health-check"/>
      <input type="submit"/>

      </header>
    </div>
  );
}

export default App;
