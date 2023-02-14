import data from "../db/data.json";
import GalCard from "./GalCard";
//import GalCard2 from "./GalCard2";
import "./Gal.css"
import { useState, useEffect, useRef } from "react";

const GalSelect = () => {
     //데이터 가져오기
     const items = data.response.body.items.item;
     console.log("items", items);
     const c1 = items.map((obj) => obj.galTitle);//맵의 결과는 배열 c1배열 생성
     console.log("c1", c1);

     //랜더링 제어변수
     //const [selItem,SetSelItem]=useState({}); 빈 오브젝트가 하나 있는것.
     const [selItem, SetSelItem] = useState();


     //select Box 제어
     const selR = useRef();

     // let optionTag =[
     // <option key={c1[0]} value={c1[0]}>{c1[0]}</option>,
     // <option key={c1[1]} value={c1[1]}>{c1[1]}</option>,
     // <option key={c1[2]} value={c1[2]}>{c1[2]}</option>,...];

     let optionTag = c1.map((item) =>
          <option key={item} value={item}>{item}</option>
     );


     //컴퍼넌트가 처름 랜더링이 일어났을 때
     useEffect(() => {
          selR.current.focus();
          console.log(selR.current);
     }, []);//비어있으면 처음 랜더링이 일어났을 때 한번만 실행 

     const handleSel = (e) => {
          e.preventDefault();
          if (selR.current.value === "") return;
          console.log("onChange", selR.current.value);
          let temp = items.filter((item) => item.galTitle === selR.current.value);
          console.log("onChange temp", temp);
          SetSelItem(temp[0]);
     };

     return (
          <>
               <div className="conright">
                    <form>
                         <select ref={selR} name="sel1" onChange={handleSel}>
                              <option value="">항목을 선택하세요.</option>
                              {optionTag}
                         </select>
                    </form>
                    {selItem && <GalCard cardItem={selItem} />}
               </div>
          </>
     );
}

// const [selItem,SetSelItem]=useState({}); 빈 오브젝트가 하나 있는것.
// () 안이 비어있으면 오브젝트인지 배열인지 알 수 없음으로 아래식 불가!
//{Object.keys(selItem).length > 0 && <GalCard cardItem={selItem} />
//오브젝트일 때는 다 쓸수 있고 괄호안에 이름을 넣어줘야함. 결과는 배열로.

export default GalSelect;