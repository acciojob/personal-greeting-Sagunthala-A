
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  // const [name,setName] = useState("");
  // return (
  //   <div>
  //       {/* Do not remove the main div */}
  //       {/*comment  */}
  //       <p>Enter Your name</p>
  //       <input
  //         type="text"
  //         onChange={(e)=>{setName(e.target.value)}}
  //       />
  //       {
  //         name &&
  //         (
  //           <p>Hello {name}!</p>
  //         )
  //       }
  //   </div>
  // )

  const [text,setText] = useState("");

  function getValue(event){
    setText(event.target.value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label for="name">Enter your name:</label><br/>
        <input type="text" onChange={getValue}/>
        <br/>
        <p>Hello {text}!</p>
    </div>
  )
}

export default App
