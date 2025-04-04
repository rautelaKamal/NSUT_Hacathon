import React, { useState, useEffect,  } from 'react';
import './App.css';

// Main components
import Header from './components/Header';
import VisualLearningSection from './components/VisualLearningSection';
import AudioLearningSection from './components/AudioLearningSection';
import IntegrationSection from './components/IntegrationSection';
import TranscendenceSection from './components/TranscendenceSection';
import MemoryPathSection from './components/MemoryPathSection';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userMemories, setUserMemories] = useState([]);
  const [currentView, setCurrentView] = useState('all');
  const [isTranscendenceActive, setIsTranscendenceActive] = useState(false);
  
  // Load memories from localStorage when the component mounts
  useEffect(() => {
    const savedMemories = localStorage.getItem('kavyapathMemories');
    if (savedMemories) {
      setUserMemories(JSON.parse(savedMemories));
    }
  }, []);

  // Save memories to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('kavyapathMemories', JSON.stringify(userMemories));
  }, [userMemories]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addMemory = (memory) => {
    setUserMemories([...userMemories, { ...memory, id: Date.now() }]);
  };

  const deleteMemory = (id) => {
    setUserMemories(userMemories.filter(memory => memory.id !== id));
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        currentView={currentView}
        setCurrentView={setCurrentView}
      />
      
      {(currentView === 'all' || currentView === 'visual') && (
        <VisualLearningSection darkMode={darkMode} addMemory={addMemory} />
      )}
      
      {(currentView === 'all' || currentView === 'audio') && (
        <AudioLearningSection darkMode={darkMode} addMemory={addMemory} />
      )}
      
      {(currentView === 'all' || currentView === 'integration') && (
        <IntegrationSection 
          darkMode={darkMode} 
          memories={userMemories}
          addMemory={addMemory}
        />
      )}
      
      {(currentView === 'all' || currentView === 'transcendence') && (
        <TranscendenceSection 
          darkMode={darkMode}
          isActive={isTranscendenceActive}
          toggleActive={() => setIsTranscendenceActive(!isTranscendenceActive)}
        />
      )}
      
      {(currentView === 'all' || currentView === 'memory') && (
        <MemoryPathSection 
          darkMode={darkMode} 
          memories={userMemories}
          deleteMemory={deleteMemory}
        />
      )}
      
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
