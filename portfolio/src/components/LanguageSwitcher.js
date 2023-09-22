import React, { useState } from 'react';

const LanguageSwitcher = ({ languages, onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
    onLanguageChange(e.target.value);
  };

  return (
    <div className="language-switcher">
      <label>Select Language: </label>
      <select value={selectedLanguage} onChange={handleChange}>
        {languages.map((lang, index) => (
          <option key={index} value={lang}>{lang}</option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
