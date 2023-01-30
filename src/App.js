import ParticlesBg from 'particles-bg';
import NavMeniu from './Nav/NavMeniu';
import Header from './Header/Header';
import Body1 from './Body1/Body1';
import InfoTab from './InfoTab/InfoTab';
import './App.css';

function App() {
  return (
    <>
      <NavMeniu />
      <Header />
      <Body1 />
      <InfoTab />
      <ParticlesBg color="#d3d3d3" num={1} type="ircle" bg={true} />
    </>
  );
}

export default App;

//"color"
//"ball"
//"lines"
//"thick"
//"circle"
//"cobweb"
//"polygon"
//"square"
//"tadpole"
//"fountain"
//"random"
//"custom"