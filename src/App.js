import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Introduction from './componens/pages/Introduction/Introduction';
import Application from './componens/pages/application/application';
import Opportunities from './componens/pages/opportunities/opportunities';
import Structure from './componens/pages/structure/structure';
import Difference from './componens/pages/difference/difference';
import Sources from './componens/pages/sources/sources';
import Konc from './componens/pages/konc/structure';

function App() {
  return (
    <><Routes>
        <Route path="/" element={<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React</h1>
        <a
          className="App-link"
          href="/introduction"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to the presentation
        </a>
      </header>
    </div>} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="application" element={<Application />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="structure" element={<Structure />} />
        <Route path="difference" element={<Difference />} />
        <Route path="sources" element={<Sources />} />
        <Route path="konc" element={<Konc/>} />
      </Routes></>
  );
}

export default App;
