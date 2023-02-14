import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';
import { useState } from "react";

const Mydiv = () => {
     const rname = 'React!!!';
     let [n,setN]=useState(0);//useState(n) > n은 첫 전달값

     /*const upN = () => {
          setN(n++);
     }*/

     return (
          <div className="content">
               <div className="header">
                    <h1>컴포넌트 예제 {rname} {n}</h1>
               </div>
               <div className="main">
                    <Mydiv1 rname={rname} n={n} setN={setN}/>
                    <Mydiv2 rname={rname} div2n={n}/> 
                    
               </div>
          </div>
     );
}

export default Mydiv;