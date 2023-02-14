import { useState } from "react";
import Mydiv21 from "./Mydiv21";

const Mydiv2 = ({ rname,div2n }) => {
     console.log("div2");
     const user=rname;
     return(
          <div className="mydiv2">
          <h2 className="divh2">Mydiv2 {user} {div2n}</h2>
          <Mydiv21 user = {user} div3n={div2n}/>
          </div>
     );
}
export default Mydiv2;