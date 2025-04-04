import React, { useState } from 'react';

function MemoryPathSection({ darkMode, memories, deleteMemory }) {
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('newest');
  
  const filteredMemories = memories.filter(memory => {
    if (filterType === 'all') return true;
    return memory.type === filterType;
  });
  
  const sortedMemories = [...filteredMemories].sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    
    if (sortOrder === 'newest') {
      return dateB - dateA;
    } else {
      return dateA - dateB;
    }
  });
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <section className={`section memory-section ${darkMode ? 'dark' : 'light'}`}>
      <div className="section-content">
        <h2>संग्रहकस्य यन्त्र (Memory Machine)</h2>
        <p className="shloka-meaning">
          "संग्रहकर्ता की मशीन, वर्तमान का पथ, आधार का शिल्प" - 
          "The collector's machine, the path of the present, the craft of the foundation"
        </p>
        
        <div className="memory-controls">
          <div className="filter-sort">
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="memory-filter"
            >
              <option value="all">All Memories</option>
              <option value="visual">Visual Only</option>
              <option value="audio">Audio Only</option>
              <option value="integrated">Integrated Only</option>
            </select>
            
            <select 
              value={sortOrder} 
              onChange={(e) => setSortOrder(e.target.value)}
              className="memory-sort"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
        
        <div className="memories-grid">
          {sortedMemories.length > 0 ? (
            sortedMemories.map(memory => (
              <div key={memory.id} className={`memory-card ${memory.type}`}>
                <div className="memory-header">
                  <span className="memory-type">
                    {memory.type === 'visual' && 'चक्षुरध्ययनम् (Visual)'}
                    {memory.type === 'audio' && 'वचनं श्रवणम् (Audio)'}
                    {memory.type === 'integrated' && 'सर्वमेककृतम् (Integrated)'}
                  </span>
                  <span className="memory-date">{formatDate(memory.timestamp)}</span>
                </div>
                
                <div className="memory-content">
                  {memory.type === 'visual' && memory.images && memory.images[0] && (
                    <div className="memory-images">
                      <img src={memory.images[0]} alt="Visual memory" />
                      {memory.images.length > 1 && <span>+{memory.images.length - 1} more</span>}
                    </div>
                  )}
                  
                  {memory.type === 'audio' && memory.recordings && memory.recordings[0] && (
                    <div className="memory-audio">
                      <audio controls src={memory.recordings[0]}></audio>
                      {memory.recordings.length > 1 && <span>+{memory.recordings.length - 1} more</span>}
                    </div>
                  )}
                  
                  {memory.type === 'integrated' && (
                    <div className="memory-integrated">
                      <p>Integrated reflection connecting visual and audio experiences</p>
                    </div>
                  )}
                  
                  {memory.reflection && (
                    <div className="memory-reflection">
                      <p>{memory.reflection}</p>
                    </div>
                  )}
                </div>
                
                <div className="memory-actions">
                  <button 
                    className="delete-memory" 
                    onClick={() => deleteMemory(memory.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-memories">No memories found. Add some using the sections above.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MemoryPathSection;
