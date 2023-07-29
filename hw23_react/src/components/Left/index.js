import { useState } from "react";

import './style.css';
import Button from './../Button';
import image1 from './../../assets/image1.jpg';
import image2 from './../../assets/image2.jpg';



const Left = (props) => {
    const [data, setData] = useState('');

    props.callback(data);
    
    return (
        <div className="left-container">
            <Button name = 'Dog 1' data={image1} onClick={setData} />
            <Button name = 'Dog 2' data ={image2} onClick={setData} />
            
        </div>
    );
}

export default Left;