import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState}  from 'react';

//https://hadi-quotes.glitch.me/quotes



function App() {

  useEffect(()=>{
    fetch("https://hadi-quotes.glitch.me/quotes")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  },[])

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <ul>
        {data.map(element => {
          return <li>
                  <p>
                    {element.quote}
                  </p>
                  <h3>
                    {element.author}
                  </h3>
                </li>
        })}
      </ul>
    </div>
  );
}

export default App;
