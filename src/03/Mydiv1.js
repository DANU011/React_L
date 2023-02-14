import Mydiv11 from "./Mydiv11";
import { useState } from "react";
const Mydiv1 = ({rname}) =>{
     console.log("div1",rname);
     const user=rname;
     let [cnt, setCnt] = useState(0);
     
     const addCnt =()=>{
          setCnt(++cnt);//++이 뒤 set하고 증가/ ++이 앞 증가 set
          console.log(cnt);
     }
     
     return(
          <div className="mydiv1">
          <h2 className="divh2">Mydiv1 {user}</h2>
          <Mydiv11 user = {user} divname={'사용자정의'+cnt} />
          <div className="divbt">
               <button onClick={addCnt}>🧡</button>
               <span>{cnt}</span>
          </div>
          </div>
     );
}
export default Mydiv1;