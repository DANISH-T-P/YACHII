import React, { useState } from 'react';
import './ReadMore.css'; // Import external CSS

const ReadMore = ({ children, maxCharacterCount = 500 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const extractText = (content) => {
    if (typeof content === 'string') return content;
    if (Array.isArray(content)) {
      return content.map(child => extractText(child)).join('');
    }
    if (typeof content === 'object' && content?.props?.children) {
      return extractText(content.props.children);
    }
    return '';
  };

  const text = extractText(children);
  const shouldTruncate = text.length > maxCharacterCount;

  return (
    <div className="read-more-container">
      <p className={`read-more-text ${isExpanded ? 'expanded' : ''}`}>
        {isExpanded || !shouldTruncate
          ? children
          : `${text.slice(0, maxCharacterCount)}...`}
      </p>

      {shouldTruncate && (
        <button
          className="read-more-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
