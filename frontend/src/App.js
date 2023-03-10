import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // fails to successfully post url to shortener. Will continue to work on this and try and debug. 
      // url shortener still works correctly when post request is sent via postman / when shortened url is called
      let res = await fetch("http://localhost:3000/short", {
        method: "POST",
        body: JSON.stringify({
          originalUrl: url
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setUrl("");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          placeholder="url"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;
