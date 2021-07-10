import './ChatBox.css'
import {useState} from "react";

export default function ChatBox({upload_msg}){
    const [chatvalue,chatvalue_update] = useState('');
    const submit_msg_to_app = () => {
        upload_msg(chatvalue);
        chatvalue_update('');
    }

    return <div className="ChatBox">
       <textarea onChange={(e) => chatvalue_update(e.target.value)} placeholder="Enter msg here ..." id="chatarea" value={chatvalue} />
       <button onClick={submit_msg_to_app} id="sendchat">Send</button>
    </div>
}