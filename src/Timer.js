import Box from './Box';
import App from './App';
const Timer = () => {
    const [abc, tureOrFalse]=useState([false,false,false]);
    const [time, changeState]=useState('00:00:00');
    setState(){
        return (
            <div className='pop-up'>
                <span>Set time</span>
                <input type="option" max='24' min='0'/>
            </div>
        )
    }
    return ( 
        <div className="timer">
            <App />
            <div className="functions">
                <button onclick={setState()}>Set time</button>
                <button onclick={startState()}>Start</button>
                <button onclick={resetState()}>Reset</button>
            </div>
        </div>
     );
}
 
export default Timer;