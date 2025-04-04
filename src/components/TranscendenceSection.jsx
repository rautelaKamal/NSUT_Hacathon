import React, { useState, useEffect } from 'react';

function TranscendenceSection({ darkMode, isActive, toggleActive }) {
  const [breathCount, setBreathCount] = useState(0);
  const [meditationActive, setMeditationActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  useEffect(() => {
    let interval = null;
    
    if (meditationActive) {
      interval = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [meditationActive]);
  
  const startMeditation = () => {
    setMeditationActive(true);
    setTimeElapsed(0);
    setBreathCount(0);
  };
  
  const stopMeditation = () => {
    setMeditationActive(false);
  };
  
  const incrementBreath = () => {
    setBreathCount(prevCount => prevCount + 1);
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  };

  return (
    <section className={`section transcendence-section ${darkMode ? 'dark' : 'light'} ${isActive ? 'transcendence-active' : ''}`}>
      <div className="section-content">
        <h2>शिवोऽहम् (Transcendence)</h2>
        <p className="shloka-meaning">
          "मैं शुद्ध आत्मा हूँ, जो इन सबसे परे है, और मैं ही शिव हूँ" - 
          "I am pure consciousness, beyond all physical limitations"
        </p>
        
        <button className="transcendence-toggle" onClick={toggleActive}>
          {isActive ? 'Exit Transcendence Mode' : 'Enter Transcendence Mode'}
        </button>
        
        {isActive && (
          <div className="meditation-container">
            <div className="meditation-circle">
              <div className={`breath-animation ${meditationActive ? 'breathing' : ''}`}></div>
              <div className="meditation-stats">
                <p>Time: {formatTime(timeElapsed)}</p>
                <p>Breaths: {breathCount}</p>
              </div>
            </div>
            
            <div className="meditation-controls">
              {!meditationActive ? (
                <button className="meditation-button start" onClick={startMeditation}>
                  Begin Meditation
                </button>
              ) : (
                <>
                  <button className="meditation-button breath" onClick={incrementBreath}>
                    Record Breath
                  </button>
                  <button className="meditation-button stop" onClick={stopMeditation}>
                    End Meditation
                  </button>
                </>
              )}
            </div>
            
            <div className="transcendence-message">
              <p>
                In this state of meditation, realize that you are beyond physical existence.
                Not defined by breath (प्राण), elements (धातु), or bodily functions.
                You are pure consciousness (चिदानन्द) - simply observe and be.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}


export default TranscendenceSection;