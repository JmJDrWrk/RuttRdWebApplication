import React from 'react';

const CopyToClipboardButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  return (
    <button onClick={copyToClipboard}>Copy to Clipboard</button>
  );
};

export default CopyToClipboardButton;