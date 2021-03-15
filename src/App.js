import './App.css';
import Headers from "./components/Headers"
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Allcouse from './components/Allcourse';


function App() {
  const toasTy = () => {
    toast.dark("Now practice", {position:"bottom-left"});
  }
  const start = () => {
    toast.dark("see first botton left", {position:"top-right"});
  }
  const run = () => {
    toasTy();
    start();
  }
  return (
    <div className="App">
      

      <Headers name = 'maxelit'/>
      <hr/>
      <h1>hello Codino</h1>
      <Button color="warning" onClick={run}>Lock!</Button>
      <ToastContainer/>
      <hr/>
      <Headers name = 'navneet chaurasiya'/>
      <Allcouse/>
      
      
    </div>
  );
}

export default App;
