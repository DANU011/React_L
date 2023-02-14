import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Theader from "./Theader";
import Tdetail from "./Tdetail";
import './Taccident.css';
import { useState, useEffect } from "react";



const Taccidentm = ({ c1, c2, data }) => {
     // console.log("c1",c1);
     // console.log("c2",c2);
     // console.log("data",data);

     //선택된 대분류
     let [selc1, setSelc1] = useState();

     //선택된 대분류에 해당하는 중분류 저장
     let [selC2A,setSelC2A]=useState([]);

     //선택된 중분류
      let [selC2, setSelC2] = useState() ;

     //선택된 항목
      let [selData, setSelData] = useState({}) ;

     //state 변수 변경
     
     //맨 처음 한번만 실행 
     useEffect(()=>{
          console.log('처음 한번만 실행...')
     },[])

     //해당하는 state변수가 변경될 때마다    
     useEffect(() => {
          console.log("selc1", selc1);
          setSelC2A(c2.filter((i)=>i[0]===selc1));
     }, [selc1]);

     useEffect(()=>{
         console.log("selC2A".selC2A);
     },[selC2A]);

    
     useEffect(() => {
          console.log("selC2", selC2);
          setSelC2A(c2.filter((i)=>i[0]===selc1));
     }, [selc1]);

     useEffect(() => {
          console.log("selC2A", selC2A) ;
      }, [selC2A]);
  
     useEffect(() => {
          console.log("selC2" , selC2) ; 
          if (selc1 && selC2) {
              setSelData(data.filter((i)=> 
                      i.사고유형_대분류 === selc1 && 
                      i.사고유형_중분류 === selC2)[0])
          }
      }, [selC2]) ;

     useEffect(() => {
          console.log("selData", selData) ;
      }, [selData]);



     //컴포넌트 랜더링이 일어날때마다 실행
     useEffect(()=>{
          console.log('랜더링...');
     });


     

     return (
          <>
               <div className="tcontent">
                    <div className="theader">
                         <Theader />
                    </div>
                    <div className="tmain">
                         <Tc1 c1={c1} selc1={selc1} setSelc1={setSelc1} />
                         {selC2A && <Tc2 selC2A= {selC2A} selC2={selC2}  setSelC2={setSelC2} />}
                         {selData && <Tdetail selData={selData}/>}
                    </div>
               </div>
          </>
     );
}
export default Taccidentm;