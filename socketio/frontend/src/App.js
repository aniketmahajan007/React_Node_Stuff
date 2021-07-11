import './App.css';
import Msgbox from "./Msgbox";
import ChatBox from "./ChatBox";
import socketClient from 'socket.io-client';
import {useEffect, useState} from "react";

function App() {
    const [Joinroom, setJoinroom] = useState('');
    const [myroomid, setmyRoomid] = useState('');
    //const [msg, setmsg] = useState('');
    const [chat,setChat] = useState([]);
    const socket = socketClient("http://localhost:8000");

    const upload_msg = (textmsg) => {
        console.log('upload-chat Called');
        socket.emit('upload-chat',textmsg, Joinroom);
    }

    const update_joinroom = () => {
        let a = prompt('Enter Room ID to join');
        if(a.length> 6){
            setJoinroom(a);
        }
    }

    useEffect(()=>{
        socket.on('connect',()=>{
            setmyRoomid(socket.id);
            console.log('connection establish: '+socket.id)
        });
        socket.on('download-chat',(download_msg)=>{
            setChat([...chat,download_msg]);
        });
    },[]);
    return (
    <div className="App">
        <h3>Your Room Id: {myroomid}</h3>
        <h3>Currently join: {Joinroom}</h3>
        <Msgbox chat={chat} />
        <div id="create_join_room_box">
            <button onClick={update_joinroom}>Join Room</button>
        </div>
        <ChatBox upload_msg={upload_msg} />
    </div>
  );
}

export default App;
