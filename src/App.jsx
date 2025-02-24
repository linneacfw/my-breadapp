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
            
            {/* <h1>My local Picture</h1>
            <img src={myImage} alt="A description" width="300" /> */}

            {/* <h1>Online Image Example</h1>
            <img src="https://via.placeholder.com/300" alt="Placeholder" /> */}

            const [count, setCount] = useState(0);

            return (
                <div>
                    <h1>Click Counter</h1>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>Click Me</button>
                </div>

                
      </div>

      
  );
}

export default App;

