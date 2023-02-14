import Wheader from "./Wheader";
import keys from "../db/item.json";
import weather2 from "../db/weather2.json";
const W1 = () => {
     let items = weather2.response.body.items.item;
     console.log("weather2", weather2);
     console.log("keys", keys);
     console.log("items", items);

     //let w2 = items.map((i)=>i.category); i.category 의 배열을 만들여야함.
     let w2 = items.map((i) => {
          let temp = [];
          temp.push(keys[i.category][0]);
          temp.push(i.obsrValue);
          temp.push(keys[i.category][1]);
          return temp;
     });
     console.log("w2", w2);

     return (

          <div className="content">
               <Wheader title={'일기예보-단기'} />
               <div>
                    <div className="w2div">
                         <span className="sp0">강수량</span>
                         <span className="sp1">0</span>
                         <span className="sp2">mm</span>
                    </div>

               </div>
          </div>

     );
}

export default W1;