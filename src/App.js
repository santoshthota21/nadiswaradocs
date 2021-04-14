import logo from './logo.svg';
import './App.css';
import Banner from './components/carousel/Banner';
import Cards from './components/card/Card';
import Questions from './components/questions/Questions';
import InstallationSteps from './components/InstallationSteps/InstallationSteps';
import OrganPattern from './components/organPattern/OrganPattern';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      {/* <Banner></Banner> */}
      {/* <NavBar></NavBar> */}
      {/* <OrganPattern></OrganPattern> */}
      {/* <Cards></Cards> */}
      <InstallationSteps></InstallationSteps>
    
    </div>
  );
}

export default App;
