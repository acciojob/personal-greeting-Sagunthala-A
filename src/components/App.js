
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <label style={{display:"block"}} htmlFor="name">Enter Your name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        {
          name&&
          (
            <p>Hello {name} !</p>
          )
        }
    </div>
  )
}

export default App
