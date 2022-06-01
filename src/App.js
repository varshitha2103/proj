import logo from "./logo.svg";
import "./App.css";
// import Greet from "./components/Greet";
// import Welcome from "./components/Welcome";
import React, { Component } from "react";
// import Hello from "./components/Hello";
// import New from "./components/New";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello World!</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="bat">
          <p>This is a child props</p>
        </Greet>
        <Greet name="ball">
          <button>Action</button>
        </Greet>
        <Greet name="book" /> */}
        {/* <Welcome />
        <Hello />
        <New /> */}{" "}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        <EventBind />
      </div>
    );
  }
}
export default App;
