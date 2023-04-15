
import './App.css';
import React, {useEffect, useState}  from 'react';

//https://hadi-quotes.glitch.me/quotes



function App() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(()=>{
    fetch("https://hadi-quotes.glitch.me/quotes")
    .then(res => res.json())
    .then(data =>{ setData(data);setFilteredData(data)})
    .catch(error => console.log(error))
  },[])

  function randomQuote() {
    fetch("https://hadi-quotes.glitch.me/quotes/random")
    .then(res => res.json())
    .then(val => setFilteredData(val))
    .catch(error => console.log(error))
  }

  function handlerAll () {
    fetch("https://hadi-quotes.glitch.me/quotes")
    .then(res => res.json())
    .then(data => setFilteredData(data))
    .catch(error => console.log(error))
  }

  function searchHandler (value) {
    setFilteredData(data)
    console.log(value)
    // fetch(`https://hadi-quotes.glitch.me/quotes/search?word=${value}`)
    // .then(res => res.json())
    // .then(data => setData(data))
    const filteredItems  = data.filter((item)=> 
    item["quote"].includes(value) || 
    item["author"].includes(value))
    console.log(filteredItems,"Filtered  Items");
    console.log(filteredData,"FilteredDate")
setFilteredData(filteredItems)
    
  }

  return (
    <div className="App">

      <header>
        <div className='btn-wrap'>
          <div className='header-btn-div'>
            <button className='btn-all header-btn' onClick={handlerAll}>All</button>
            <button className='btn-random header-btn' onClick={randomQuote}>Random</button>
          </div>
          <div className='header-btn-div'>
            <input className='search-input' type="text" placeholder='Search' onChange={(event) => {
              searchHandler(event.target.value)
            }}/>
          </div>
        </div>
      </header>
      
      
      <div className='all-quote'>
        <ul className='bg-ul'>
          {filteredData.map((element, index) => {
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
