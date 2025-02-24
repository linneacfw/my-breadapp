import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//for local image placed in src/assets -> import myImage from './assets/myimage.jpg

function App() {
  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Welcome to Linnea's Fairy Bread page!</h1>
          <p>This is a simple React app created with Vite and hosted on GitHub pages!</p>
          <ul>
                <li>First item</li>
                <li>Second item</li>
            </ul>

      </div>
      
  );
}

export default App;

