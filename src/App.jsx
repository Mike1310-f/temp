import First from "./component/First";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./component/Second";
import Third from "./component/Third";
import Fourth from "./component/Fourth";
import Fifth from "./component/Fifth";
import Sixth from "./component/Sixth";
import RightAnswer from "./component/RightAnswer";
import LastPage from "./component/LastPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/fourth" element={<Fourth />} />
        <Route path="/fifth" element={<Fifth />} />
        <Route path="/sixth" element={<Sixth />} />
        <Route path="/rightanswer" element={<RightAnswer />} />
        <Route path="/lastpage" element={<LastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
