import './App.css';
import Msgbox from "./Msgbox";
import ChatBox from "./ChatBox";
import socketClient from 'socket.io-client';
import {v4 as uuid} from 'uuid';
import {useEffect, useState} from "react";

function App() {
    const [roomid, setRoomid] = useState('');
    const [myroomid, setmyRoomid] = useState('');
    const [msg, setmsg] = useState('');
    const [chat,setChat] = useState([]);
    const socket = socketClient("http://localhost:8000");
    useEffect(()=>{
        socket.on('connect',()=>{
            setmyRoomid(socket.id);
            console.log('connection establish: '+socket.id)
        });
        socket.on('server-chat',(msg)=>{
            console.log(msg);
        });
        setTimeout(()=>{
            socket.emit('chat','Hello There!')
        },6000);
    },[]);
    return (
    <div className="App">
        <h3>Your Room Id: {myroomid}</h3>
        <h3>Currently join: {roomid}</h3>
        <Msgbox/>
        <div id="create_join_room_box">
            <button>Join Room</button>
        </div>
        <ChatBox/>
    </div>
  );
}

export default App;
