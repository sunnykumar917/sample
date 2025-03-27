import React, { useState } from 'react';
import "./part2.css";

const Part2 = () => {
  const [hoveredWords, setHoveredWords] = useState([]);

  const abc = "The sun set behind the mountains as the birds flew home. In this version, the code will split the simple story into individual words, and when you hover over any word, it will be highlighted with bold text and full opacity. When you move your mouse away, it returns to normal (half visibility). Let me know if you need more adjustments or another type of effect.";

  // Split the story into words
  const words = abc.split(' ');

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Get all word elements
    const wordElements = document.querySelectorAll('.word');

    // Calculate which words are near the cursor
    const hovered = [];
    wordElements.forEach((wordEl, index) => {
      const rect = wordEl.getBoundingClientRect();

      // Check if the cursor is within the word's bounding box (with some padding)
      const padding = 20; // Adjust this to change the hover area size
      if (
        clientX >= rect.left - padding &&
        clientX <= rect.right + padding &&
        clientY >= rect.top - padding &&
        clientY <= rect.bottom + padding
      ) {
        hovered.push(index);
      }
    });

    setHoveredWords(hovered);
  };

  const handleMouseLeave = () => {
    setHoveredWords([]); // Reset highlighted words when the cursor leaves the container
  };

  return (
    <div
      className="story-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {words.map((word, index) => (
        <span
          key={index}
          className={`word ${hoveredWords.includes(index) ? 'full' : 'half'}`}
        >
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default Part2;
