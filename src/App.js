
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

  function randomQuote() {
    fetch("https://hadi-quotes.glitch.me/quotes/random")
    .then(res => res.json())
    .then(data => setData([data]))
    .catch(error => console.log(error))
  }

  function handlerAll () {
    fetch("https://hadi-quotes.glitch.me/quotes")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(error => console.log(error))
  }

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <div className='header-btn'>
        <button className='btn-all' onClick={handlerAll}>All</button>
        <button className='btn-random' onClick={randomQuote}>Random</button>
      </div>
      
      <div className='all-quote'>
        <ul className='bg-ul'>
          {data.map((element, index) => {
            return <li className='li-list' key={index}>
                    <p>
                      {element.quote}
                    </p>
                    <h3>
                      {element.author}
                    </h3>
                    <br/>
                  </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
