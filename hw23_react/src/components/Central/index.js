import './style.css'

const  Central=(props) => {
    return (
        <div className="central-container">
            <img src={props.src} className='myImage'></img>
        </div>
    )
}

export default Central;