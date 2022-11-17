import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Detail />} path="/movie/:id" />
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
