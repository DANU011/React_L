import RouterHome from "./RouterHome";
import RouterNv from "./RouterNv";
import RouterPage1 from "./RouterPage1";
import RouterPage2 from "./RouterPage2";

import { Route,Routes } from "react-router-dom";





const RouteMain = ()=>{
      
     return(
          <>
          <RouterNv />
          <Routes>
               <Route path="/" element={<RouterHome />} />
               <Route path="/p1/:item" element={<RouterPage1 />} />
               <Route path="/p2" element={<RouterPage2 />} />
          </Routes>
          </>
     ); //<Route path="/p1/:item" /:item 아이템을 달고 가겠다. 변수 다른거 써도됨.
}
export default RouteMain;