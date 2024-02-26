// PostingButtons.jsx
'use client';
import React from 'react';

const PostingButtons = () => {
  return (
    <div className="posting-buttons--container">
      <button className="posting-button posting-button--white">
        Post a home
      </button>
      <div className="button-separator"></div>
      <button className="posting-button posting-button--grey">
        Post a job
      </button>
    </div>
  );
};

export default PostingButtons;