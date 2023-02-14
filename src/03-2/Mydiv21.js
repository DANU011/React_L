import { useState } from "react";
const Mydiv21 = ({rname,div3n}) => {
     const user = rname;
     return (
          <div className="mydiv21">
               <h3 className="divh3">Mydiv21</h3>
               <p>
                    {rname}{div3n}
               </p>
          </div>

     );
}
export default Mydiv21