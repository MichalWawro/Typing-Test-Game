import { useEffect } from 'react';

function GlobalKeyListener({ onInput, reset, stage, testSetTime}) {
  const handleKeyPress = (event) => {
    const { key } = event;
    
    if (key === 'Escape') { //Reset Button
      reset();
    };

    if(key === 'F2') {
      testSetTime(1);
    }

    if (stage === 3) return;

    if (key.length === 1 || key === 'Backspace') {
      onInput(key);
    };
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);;
  }, [stage]);

  return null;
};

export default GlobalKeyListener;