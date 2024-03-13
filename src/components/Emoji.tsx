import React from 'react';

interface EmojiProps {
  emoji: string;
  size?: number;
  className?: string;
}

const Emoji: React.FC<EmojiProps> = ({ emoji, size = 24, className = '' }) => {
  return (
    <span
      className={`emoji ${className}`}
      style={{ fontSize: `${size}px` }}
      role="img"
      aria-label={emoji}
    >
      {emoji}
    </span>
  );
};

export default Emoji;
