import React from 'react';
import emojisData from '../emoji.json';

interface EmojiData {
  codes: string;
  char: string;
  name: string;
  category: string;
  group: string;
  subgroup: string;
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
  
  const findEmoji = (emojiName: string): EmojiData | undefined => {
    const emojisDataTyped = emojisData as EmojiCategory;
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
      {emojiObject.emoji}
    </span>
    </div>
  );
};

export default Emoji;
