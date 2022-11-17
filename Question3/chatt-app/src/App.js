import './App.css';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';

import {nanoid} from 'nanoid';


const socket = io.connect("http://localhost:5000");
const userName = nanoid(4);

function App() {
  const [message, setMessage] =  useState('');
  const [chat ,setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {message, userName});
    setMessage("")
  }

  useEffect(() =>{
    socket.on("chat", (payload)=>{
      setChat([...chat, payload]);
    })
  })

  return (
    <div className="App">
    <header className="App-header">
      Chatty App
      {chat.map((payload, index)=>(
        <p key={index}>message : {payload.message + "  "}
        <span>id : { payload.userName}</span></p>
      ))}
      <form style={{marginTop : "2rem"}} onSubmit={sendChat} >
        <input type="text" placeholder="Enter chat" name="chat" value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <button type="submit">
          Submit
        </button>
      </form>
    </header>
    </div>
  );
}

export default App;
