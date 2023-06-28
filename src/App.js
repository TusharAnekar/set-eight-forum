import {Routes, Route} from "react-router-dom"

import './App.css';
import { Header } from './components/Header';
import { Home } from "./pages/Home";
import { Questions } from "./pages/Questions";
import { Answers } from "./pages/Answers";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Questions/>}></Route>
          <Route path="/questions/:answerId" element={<Answers/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
