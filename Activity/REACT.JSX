/**Types of Components in React
 * 1. Functional Components
Simple JavaScript functions
Use Hooks for state & lifecycle
 */
function Welcome() {
  return <h1>Hello User</h1>;
}
/**Class Components
Old method (less used now)
Uses lifecycle methods */
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello User</h1>;
  }
}
/**Presentational
 * UI ONLY
 */
function Button() {
  return <button>Click</button>;
}

/**Container
Logic + state */
function App() {
  return <Button />;
}

/**PROPS 
 * DATA PASSED FROM PARENT TO CHILD
 */
function Student(props) {
  return <h2>Name: {props.name}</h2>;
}

function App() {
  return <Student name="John" />;
}

/**State Concept
State = Data managed inside component */
//COUNTER EXAMPLE
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

//INPUT FIELD EXAMPLE
import { useState } from "react";

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <h2>Hello {name}</h2>
    </div>
  );
}

/**Hooks Concept
Hooks = Special functions to use React features in functional components */

//1 useState =>Manages state
const [count, setCount] = useState(0);

//2. useEffect =>Handles side effects (API call, DOM update)
import { useEffect } from "react";

useEffect(() => {
  console.log("Component Loaded");
}, []);

//useRef=>Access DOM directly
import { useRef } from "react";

const inputRef = useRef();

<input ref={inputRef} />

//4. useContext=>Share data globally
const value = useContext(MyContext);