import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Error from "./Error/Error";
import Form from "./Form/Form";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
