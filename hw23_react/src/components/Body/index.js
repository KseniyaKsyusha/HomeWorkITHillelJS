import { useState } from "react";
import './style.css'
import Left from "../Left"
import Central from "../Central";

const Body = () => {
    const [src, setSrc] = useState('');
   
    return (
    <div className='container'>
        <Left callback={setSrc} />
        <Central src={src}/>
    </div>
    )

}


export default Body;