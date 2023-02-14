
import Galc1 from "./Galc1";
import Galcard from "./Galcard";
import { useState, useEffect } from "react";

const Galm = ({galt, datas}) => {
  let [selgalt, setSelgalt] = useState();
  let [selcard, setSelcard] = useState([]);
  
  useEffect (() => {
    if (selgalt) {
      setSelcard(datas.filter((i) => i["galTitle"] === selgalt)[0])
    }
  }, [selgalt]);
  
  return (
    <div className="galm">
      <Galc1 galt={galt} selgalt={selgalt} setSelgalt={setSelgalt}/>
      <Galcard selcard={selcard}/>
    </div>
  );
}

export default Galm;