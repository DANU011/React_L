import Wheader from "./Wheader";
import keys from "../db/item.json";
import weather2 from "../db/weather2.json";
import { useEffect, useState } from "react";//지금 당장은 상관없지만 실시간 패치에는 필요


const W1 = () => {
     //State 변수
     const [items, setItems] = useState();
     const [itemTag, setItemTag] = useState();


     //useEffect
     //랜더링이 발생 될 때 마다 실행
     //useEffect(()=>{});

     //맨처음 컴포넌트 랜더링시 실행 
     useEffect(() => {
          //console.log("weather2",weather2.response.body.items.item);
          setItems(weather2.response.body.items.item);

     }, []);

     //특정 State변수 변경시 실행
     useEffect(() => {
          if (!items) return;
          console.log("items", items);
          let temp = items.map((i, n) =>
               <div className="w2div" key={"w2div"+n}>
                    <span className="sp0">{keys[i.category][0]}</span>
                    <span className="sp1">{i.obsrValue}</span>
                    <span className="sp2">{keys[i.category][1]}</span>
               </div>
          );

          setItemTag(temp);//temp 변수 안잡고 바로 넣어도 됨.
     }, [items]);

     // let items = weather2.response.body.items.item;
     // console.log("weather2", weather2);
     // console.log("keys", keys);
     // console.log("items", items);

     // //let w2 = items.map((i)=>i.category); i.category 의 배열을 만들여야함.
     // let w2 = items.map((i) => {
     //      let temp = [];
     //      temp.push(keys[i.category][0]);
     //      temp.push(i.obsrValue);
     //      temp.push(keys[i.category][1]);
     //      return temp;
     // });
     // console.log("w2", w2);

     return (

          <div className="content">
               <Wheader title={'일기예보-단기'} />
               {items && itemTag}
          </div>

     );
}

export default W1;