import { useState, useEffect } from 'react';

const Home = () => {
   const texts = [' Fullstack Developer', ' Software Engineer'];
  const [displayedText, setDisplayedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    let typingTimer;
    let deletingTimer;
    let delayTimer;
    const typeText = (text, index = 0) => {
      if (index < text.length) {
        setDisplayedText(prev => prev + text[index]);
        typingTimer = setTimeout(() => typeText(text, index + 1), 100);
      } else {
        delayTimer = setTimeout(() => deleteText(text), 2000);
      }
    };

    const deleteText = (text) => {
      if (text.length > 0) {
        setDisplayedText(text.slice(0, -1));
        deletingTimer = setTimeout(() => deleteText(text.slice(0, -1)), 100);
      } else {
        const nextTextIndex = (currentTextIndex + 1) % texts.length;
        setCurrentTextIndex(nextTextIndex);
        typeText(texts[nextTextIndex]);
      }
    };

    typeText(texts[currentTextIndex]);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(deletingTimer);
      clearTimeout(delayTimer);
    };
  }, [currentTextIndex]);
  return (
    <div className="wave-container flex flex-col items-center justify-center relative overflow-hidden">
      <div className="wave wave1 z-0"></div>
      <div className="wave wave2 z-0"></div>
      <div className="wave wave3 z-0"></div>
      <div className="content text-center flex items-center justify-between z-10 relative" style={{ top: '-100px' }}>
       <div className="text-left pr-8 top-5 relative z-1">
  <h4 className="name font-bold text-gray-700 ">Hi, I'm</h4>
  <h2 className="name text-4xl font-bold text-indigo-500 bg-clip-text sm:text-4xl text-1xl">Rens Belga Acuña</h2>
<h2 className="name text-4xl font-bold bg-clip-text text-indigo-500 sm:text-4xl">Aspiring 
    {displayedText}
    </h2>

          <div className="flex items-center mt-4">
    <div className="flex items-center justify-center">
      <a href="mailto:wasieacuna@email.com" className="bg-slate-950 hover:bg-slate-800 text-indigo-500 font-bold py-2 px-4 rounded">Send Message</a>
    
    </div>


          </div>

        </div>
       
      </div>
    </div>
  );
};

export default Home;
