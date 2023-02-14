import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';

const Mydiv = () => {
     const rname = 'React!!!';

     return (
          <div className="content">
               <div className="header">
                    <h1>컴포넌트 예제 {rname}</h1>
               </div>
               <div className="main">
                    <Mydiv1 rname={rname}/>
                    <Mydiv2 user={rname}/> 
                    
               </div>
          </div>
     );
}

export default Mydiv;