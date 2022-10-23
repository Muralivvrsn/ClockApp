import "./App.css";
import {useState} from 'react';
import Box from './Box';
import Navbar from './Navbar'
function App() {
  let ctime = new Date().toLocaleTimeString("en-Us",{hour: "2-digit",minute: "2-digit",second: "2-digit", hour12: true});
  const [time, fn] = useState(ctime);
  const update = () =>{
    ctime = new Date().toLocaleTimeString("en-Us",{hour: "2-digit",minute: "2-digit", second: "2-digit", hour12: true});
    fn(ctime);
  }
  console.log(ctime);
  setInterval(update,1000);
  return (
    <div className="App">
      <Navbar />
      <div className="clock-box">
        <Box number={parseInt(time[0])}/>
        <Box number={parseInt(time[1])}/>
        <span>:</span>
        <Box number={parseInt(time[3])}/>
        <Box number={parseInt(time[4])}/>
        <span>:</span>
        <Box number={parseInt(time[6])}/>
        <Box number={parseInt(time[7])}/>
      </div>
    </div>
  );
}

export default App;
