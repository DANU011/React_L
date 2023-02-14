import './App.css';
//import RouteMain from './09/RouteMain';
import { BrowserRouter } from 'react-router-dom';
import Wmain from './10/Wmain';
//import { startTransition } from 'react';
//import GalSelect from './06-1/GalSelect';
//import Gal from './06-1/Gal';
//import MyForm from './08/MyForm';
//import Frcst from './04-2/Frcst';
//import Taccident from './05/Taccident';
//import Taccidentcopy from './05/Taccidentcopy';
//import Taccidenthw from './05/Taccidenthw';
//import Gal from './06-02/Gal';

const App = () => {
  //console.log('RouteMain.js');
  return (
    <BrowserRouter>
      <Wmain />
    </BrowserRouter>
  );
}

export default App;