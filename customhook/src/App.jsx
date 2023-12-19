import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useStorage from './useStorage'

function App() {

  const [content, setContent] = useStorage('content', '');

  return (
    <>
      <div>
        <input
          type="text"
          style={{
            width: '25vw',
            padding: '6px',
            textIndent: '8px',
            fontSize: 'large',
          }}
          value={content} 
          onChange={(e) => {
            console.log(e.target.value);
            setContent(e.target.value);
          }}
        />
      </div>
    </>
  );
}

export default App;
