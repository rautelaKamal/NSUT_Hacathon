import React from 'react';

function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>कव्यपथ - Kavyapath</h3>
          <p>A Digital Poetry Platform inspired by Sanskrit wisdom</p>
        </div>
        
        <div className="footer-section">
          <h3>Sanskrit Shlokas</h3>
          <p>"चक्षुरध्ययनम्, वचनं श्रवणम्, सर्वमेककृतम्"</p>
          <p>"न च प्राण संज्ञो न वै पञ्चवायु..."</p>
          <p>"संग्रहकस्य यन्त्र, वर्तमानस्य गति, आधारस्य शिल्प"</p>
        </div>
        
        <div className="footer-section">
          <h3>Created with</h3>
          <p>React • Poetry • Ancient Wisdom</p>
          <p>© {new Date().getFullYear()} Kavyapath</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;