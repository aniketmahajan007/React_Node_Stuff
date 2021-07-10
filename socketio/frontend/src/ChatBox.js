import './ChatBox.css'

export default function ChatBox(){
    return <div className="ChatBox">
       <textarea placeholder="Enter msg here ..." id="chatarea" />
       <button id="sendchat">Send</button>
    </div>
}