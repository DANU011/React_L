//import data from "../db/item.json";
import { Route,Routes } from "react-router-dom";
import W1 from "./W1";
import W2 from "./W2";
import Wmenu from "./Wmenu";
// import item from "../db/item.json";
// import weather from "../db/weather.json";
// import wearher2 from "../db/weather2.json";
//import './Wmain.css'

const Wmain = () => {
     // let item;
     // let weather = item.response.body.items.item;
     // let wearher2 = item.response.body.items.item;
     
     
     return (

          <Routes>
               <Route path="/" element={<Wmenu />} />
               <Route path="/w1" element={<W1 />} />
               <Route path="/w2" element={<W2 />} />
          </Routes>

     );
}

export default Wmain;