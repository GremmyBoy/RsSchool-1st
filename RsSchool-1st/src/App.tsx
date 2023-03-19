import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Error from "./Error/Error";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="heading">Hello World</h1>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
