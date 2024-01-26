import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Chats from "./Pages/Chats";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/chats" Component={Chats} />
      </Routes>
    </div>
  );
}

export default App;
