import React from 'react';
import './App.css';
import {OpenAIApi,Configuration} from "openai"
import { useState } from 'react';

function App() {
const [prompt, setprompt] = useState("");
const [result, setresult] = useState("");

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async () =>{
 const res= await openai.createImage({
  prompt:prompt,
  n: 1,
  size: "1024x1024",
});
setresult(res.data.data[0].url);

}

  return (
    <div className='app'>
      <input className='app-input'
      placeholder='Type something to generate image'
      onChange={(e)=>setprompt(e.target.value)}
      />
   <button onClick={generateImage}>Generate Image</button>
   <img src={result} alt="" />
    </div>
  );
}

export default App;
