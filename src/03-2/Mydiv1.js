import Mydiv11 from "./Mydiv11";
import { useState } from "react";//1)
import { useEffect } from "react";

const Mydiv1 = ({ rname,n,setN }) => {
     console.log("div1", rname);
     const user = rname;
     let [cnt, setCnt] = useState(0);//set변수-함수
     //문법은 지켜줘야. 2)변경시킬 변수/배열로 받아줘야함/바꾸고 싶으면 set함수로 변경. 변수 직접적x
     //let cnt=0;

     const addCnt = () => {
          /*cnt=cnt+1;
          if(cnt%2==0){*/
          setCnt(++cnt);//3)변수 증가를 set함수로 변수 변경./++이 뒤 set하고 증가/ ++이 앞 증가 set/수식 사용 가능.
          //setCnt(cnt%2===0? cnt *10 : cnt); //가능!
          //++하면 setN에서 한번더 더해져서 2씩 상승
          //++cnt; \
          //setN(cnt);
          console.log(cnt);
     }
     
     useEffect(()=> {
          console.log('mydiv 처음입니다.');
     });

     useEffect(()=> {
          console.log('mydiv 변경되었습니다.')
          return(
               console.log('종료')
          );
     },[]);

     useEffect(()=>{
          setN(cnt)
     },[cnt]);
     
     return (
          <div className="mydiv1">
               <h2 className="divh2">Mydiv1 {user} n={n}</h2>
               <Mydiv11 user={user} divname={'사용자정의' + cnt} />
               <div className="divbt">
                    <button onClick={addCnt}>🧡</button>
                    <span>{cnt}</span>
               </div>
          </div>
     );/*onClick > cnt 호출 > 증가o 화면 적용은x 돔이 만들어지면 고쳐지지x 
     > 나는 업데이트 하고싶음 > useState hook 사용 > React가 감지해서 바꾸도록 하는것*/
     //내가 만드는 변수는 use로 시작x, react는 use로 시작하면 hook으로 인식.
}
export default Mydiv1;