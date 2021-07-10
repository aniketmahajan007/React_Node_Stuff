import './Msgbox.css';
import {v4 as uuid} from 'uuid';

export default function Msgbox({chat}){
    return <div className="Msgbox">
        <h3>React Msg Box Socket Test</h3>
        <div id="Chatmsg">
            {
                chat.map((msg)=>{
                    return <span key={uuid()}>{msg}</span>
                })
            }
        </div>
    </div>
}