import React, { useState } from 'react';

function IntegrationSection({ darkMode, memories, addMemory }) {
  const [integratedReflection, setIntegratedReflection] = useState('');
  const [selectedVisual, setSelectedVisual] = useState(null);
  const [selectedAudio, setSelectedAudio] = useState(null);
  
  const visualMemories = memories.filter(memory => memory.type === 'visual');
  const audioMemories = memories.filter(memory => memory.type === 'audio');
  
  const handleReflectionChange = (e) => {
    setIntegratedReflection(e.target.value);
  };
  
  const saveIntegratedMemory = () => {
    if (selectedVisual && selectedAudio && integratedReflection) {
      addMemory({
        type: 'integrated',
        visualReference: selectedVisual,
        audioReference: selectedAudio,
        reflection: integratedReflection,
        timestamp: new Date().toISOString()
      });
      
      // Clear the form
      setSelectedVisual(null);
      setSelectedAudio(null);
      setIntegratedReflection('');
    }
  };

  return (
    <section className={`section integration-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-content">
        <h2>सर्वमेककृतम् (Integration)</h2>
        <p className="shloka-meaning">"सब कुछ एकीकृत है" - "Everything is integrated"</p>
        
        <div className="integration-form">
          <h3>Integrate Visual and Audio Experiences</h3>
          
          <div className="memory-selectors">
            <div className="visual-selector">
              <h4>Select a Visual Memory</h4>
              <div className="memory-grid">
                {visualMemories.length > 0 ? (
                  visualMemories.map(memory => (
                    <div 
                      key={memory.id}
                      className={`memory-card ${selectedVisual === memory.id ? 'selected' : ''}`}
                      onClick={() => setSelectedVisual(memory.id)}
                    >
                      {memory.images && memory.images[0] && (
                        <img src={memory.images[0]} alt="Visual memory" />
                      )}
                      <span>{new Date(memory.timestamp).toLocaleDateString()}</span>
                    </div>
                  ))
                ) : (
                  <p>No visual memories saved yet. Add some in the Visual section.</p>
                )}
              </div>
            </div>
            
            <div className="audio-selector">
              <h4>Select an Audio Memory</h4>
              <div className="memory-grid">
                {audioMemories.length > 0 ? (
                  audioMemories.map(memory => (
                    <div 
                      key={memory.id}
                      className={`memory-card ${selectedAudio === memory.id ? 'selected' : ''}`}
                      onClick={() => setSelectedAudio(memory.id)}
                    >
                      {memory.recordings && memory.recordings[0] && (
                        <audio controls src={memory.recordings[0]}></audio>
                      )}
                      <span>{new Date(memory.timestamp).toLocaleDateString()}</span>
                    </div>
                  ))
                ) : (
                  <p>No audio memories saved yet. Add some in the Audio section.</p>
                )}
              </div>
            </div>
          </div>
          
          <textarea
            placeholder="Reflect on how these experiences connect and integrate..."
            value={integratedReflection}
            onChange={handleReflectionChange}
            rows={5}
          />
          
          <button 
            className="save-button"
            onClick={saveIntegratedMemory}
            disabled={!selectedVisual || !selectedAudio || !integratedReflection}
          >
            Save Integrated Experience
          </button>
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;