import { useState } from "react"


export function Likes(){
    const [Likes, setLikes] = useState(0);


function cliqueiEmGostei(){
    setLikes(Likes + 1);
}
    return(
        <div>
            <h2>Você gostou do meu projeto?</h2>
            <h3>{Likes}</h3>
            <button onClick={cliqueiEmGostei}>Gostei</button>
        </div>
    )
}