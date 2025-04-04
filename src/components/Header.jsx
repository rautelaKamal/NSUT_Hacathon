import React from 'react';

function Header({ darkMode, toggleDarkMode, currentView, setCurrentView }) {
  return (
    <header className={`header ${darkMode ? 'dark' : 'light'}`}>
      <div className="logo">
        <h1>कव्यपथ</h1>
        <p>A Digital Poetry Platform</p>
      </div>
      <nav>
        <ul>
          <li onClick={() => setCurrentView('all')} className={currentView === 'all' ? 'active' : ''}>
            सर्वम् (All)
          </li>
          <li onClick={() => setCurrentView('visual')} className={currentView === 'visual' ? 'active' : ''}>
            चक्षुरध्ययनम् (Visual)
          </li>
          <li onClick={() => setCurrentView('audio')} className={currentView === 'audio' ? 'active' : ''}>
            वचनं श्रवणम् (Audio)
          </li>
          <li onClick={() => setCurrentView('integration')} className={currentView === 'integration' ? 'active' : ''}>
            एककृतम् (Integration)
          </li>
          <li onClick={() => setCurrentView('transcendence')} className={currentView === 'transcendence' ? 'active' : ''}>
            शिवोऽहम् (Transcendence)
          </li>
          <li onClick={() => setCurrentView('memory')} className={currentView === 'memory' ? 'active' : ''}>
            संग्रहकस्य (Memory)
          </li>
        </ul>
      </nav>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;