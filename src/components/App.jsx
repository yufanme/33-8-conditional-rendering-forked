import React from "react";
import Login from "./Login";

// let isLoggedIn = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {/* {isLoggedIn ? <h1>User</h1> : <Login />} */}
      {/* {currentTime > 18 ? <h1>Why are you still working?</h1> : <h1>Go for the work!</h1>} */}
      {currentTime > 18 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;
