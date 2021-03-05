import './App.css';
import BaseLayout from './layouts/BaseLayout';
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <BaseLayout />
      </Router>
    </div>
  );
}

export default App;
