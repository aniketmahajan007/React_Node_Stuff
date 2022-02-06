import {useState} from "react";

export default function Folder({directory}){

    const [expand,updateExpand] = useState(true);

    return(
        <div>
            <span onClick={() => updateExpand(!expand)}>{directory.name}</span>
            {
                expand ? <ul>
                    {
                        expand ? directory.directory.map((dir)=>{
                            return dir.isFolder ? <Folder key={dir.name} directory={dir} /> : <li>{dir.name}</li>;
                        }): ''
                    }
                </ul> :
                    ''
            }
        </div>
    )
}