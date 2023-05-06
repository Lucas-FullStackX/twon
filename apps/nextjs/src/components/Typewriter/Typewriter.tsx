import { useEffect, useState } from 'react';

interface TypewriterProps {
  /**
   * The text to display using the typewriter effect.
   */
  text: string;
  /**
   * The speed of the typewriter effect, in milliseconds per character.
   */
  speed?: number;
}

export const Typewriter = ({ text, speed = 15 }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      /**
       * Use a setInterval to add each character
       * to the current text at the given speed
       */
      const intervalId = setInterval(() => {
        setCurrentText(`${currentText}${text[currentIndex]}`);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [currentIndex, currentText, text, speed]);

  return <p className="whitespace-pre-line">{currentText}</p>;
};
