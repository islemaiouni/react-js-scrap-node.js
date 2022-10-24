import React, { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <LinkPreview />
    </div>
  );
}


function LinkPreview() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(evt) => {
    setLoading(true)
    evt.preventDefault();
    console.log(`Submitting ${text}`);

    const res = await fetch('url', { 
        method: 'POST', 
        body: JSON.stringify({ text }) 
    });

    const data = await res.json();
    console.log(data)

    setLinks(data);
    setLoading(false);
  }

  return (
    <div>
      <h2>Preview</h2>
      {loading &&  <h3>Fetching link previews... 🤔🤔🤔</h3> }
      { links.map(data => <Previewdata  Data={data} />) }
    </div>
  )
}

//!!modufue function for your url !! 

function previewData(data){
  return (
      <h9>data</h9>
      <img src={Data.image} />
      <div>
        <h3>{Data.title}</h3>
        <p>{Data.description}</p>
      </div>
  )
}  
export default App;
