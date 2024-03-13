import React from 'react';
import emojisData from '../emoji.json';

interface EmojiData {
  char: string;
  name: string;
  category: string;
}

interface EmojiProps {
  emoji: string;
  size?: number;
  className?: string;
}

interface EmojiCategory {
  [key: string]: EmojiData[];
}

const Emoji: React.FC<EmojiProps> = ({ emoji, size = 24, className = '' }) => {
  
  const emojisDataTyped: EmojiCategory = emojisData.reduce((acc: EmojiCategory, emoji: EmojiData) => {
    if (!acc[emoji.category]) {
      acc[emoji.category] = [];
    }
    acc[emoji.category].push(emoji);
    return acc;
  }, {});

  const findEmoji = (emojiName: string): EmojiData | undefined => {
    for (const categoryKey in emojisDataTyped) {
      const emojiCategory: EmojiData[] = emojisDataTyped[categoryKey];
      const emojiObject = emojiCategory.find(item => item.name === emojiName);
      if (emojiObject) {
        return emojiObject;
      }
    }
    return undefined;
  };
  
  const emojiObject = findEmoji(emoji);
  console.log(emojiObject)
  if (!emojiObject) {
    return null; 
  }

  return (
    <div>   
    <span
      className={`emoji ${className}`}
      style={{ fontSize: `${size}px` }}
      role="img"
      aria-label={emojiObject.name}
    >
      {emojiObject.char}
    </span>
    </div>
  );
};

export default Emoji;
