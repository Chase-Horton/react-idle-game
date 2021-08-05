import {BrowserRouter as Router,
  Route,
  Redirect,
  Switch} from 'react-router-dom';

import JobsPage from './pages/Jobs/JobsPage';
import BuildingsPage from './pages/Buildings/BuildingsPage';
import TerritoryPage from './pages/Territory/TerritoryPage';
import MutationsPage from './pages/Mutations/MutationsPage';
import ProductionPage from './pages/Production/ProductionPage';
import SciencePage from './pages/Science/SciencePage';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return(
    <>
      <Navbar />
    </>
  )
}

export default App;
