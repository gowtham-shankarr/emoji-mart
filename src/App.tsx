import React, { useState } from 'react';
import emojisData from './emoji.json';
import Emoji from './components/Emoji';
import Logo from './assets/emoji.svg'
import Github from './assets/github.png'
import Empty from  './assets/empty.svg'

interface EmojiData {
  char: string;
  name: string;
}

const EmojiPicker: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const handleEmojiClick = (emoji: string) => {
    setSelectedEmoji(emoji);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredEmojis = emojisData.filter((emojiData: EmojiData) =>
    emojiData.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='logo-container'>
        <div>
          <img src={Logo} width={100} height={100} alt='logo'/>
        </div>
        <div>
          <a href='https://github.com/gowtham-shankarr/emoji-mart' target='_blank'>
            <img src={Github} width={30} height={30} alt='Github logo'/>
          </a>
        </div>
      </div>
      <div className="container">
        <h1>Emoji Picker</h1>
        <p className='description'>
          Select emojis and copy their corresponding React component code with ease. Simplify emoji integration in your React applications.
        </p>
        <div className="text-center">
          <div className="search-input">
            <input
              type="text"
              placeholder="Search emojis"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {filteredEmojis.length === 0 ? (
          <div className='text-center'>
            <img src={Empty} width={100} height={100} alt='empty' />
          <p className="no-results-message">No emojis found</p>
          </div>
        ) : (
          <div className='emoji-align-container'>
            <div className="emoji-container">
              {filteredEmojis.map((emojiData: EmojiData, index: number) => (
                <span
                  key={index}
                  onClick={() => handleEmojiClick(emojiData.char)}
                  className="emoji-wrapper"
                >
                  <Emoji emoji={emojiData.char} size={30} />
                </span>
              ))}
            </div>
            {selectedEmoji && (
              <div>
                <h2>Selected Emoji</h2>
                <Emoji emoji={selectedEmoji} size={40} />
                <p>Component:</p>
                <code>{`<Emoji emoji="${selectedEmoji}" size={40} />`}</code>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
  
};

export default EmojiPicker;
