import WebsiteBanner from './components/website-banner.jsx';
import UserList from './components/user-list.jsx';
import StoryList from './components/story-list.jsx';
import React, { useState } from 'react';



var App = () => {
  //const [text, setText] = useState('update?');
  // Add this in your component file
  require('react-dom');
  window.React2 = require('react');
  console.log(window.React1 === window.React2);
  return (
    <div>
      <WebsiteBanner />
      <button onClick={() => {
        //setText('updated!!!')
      }}>Toggle</button>
      <UserList />
      <StoryList />

    </div>
  );
};

ReactDOM.createRoot(document.getElementById('content')).render(<App />);
