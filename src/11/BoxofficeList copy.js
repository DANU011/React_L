import { useState, useEffect } from "react";

const boxofficeList = ({ tDt }) => {
     //console.log("boxofficeList", tDt);

     const [mvlist, setMvlist] = useState();

     //맨 처음 랜더링시
     useEffect(() => {
          if (!tDt) return;
          const apikey = `f5eef3421c602c6cb7ea224104795888`;
          let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${tDt}`
          fetch(url)
          .then((resp) => resp.json())
          .then((data) => console.log(data.boxofficeResult.dailyBoxOfficelist))
          .catch((err) => console.log(err))
     }, []);



     return (
          <div>
               <div>
                    {tDt && mvlist}
               </div>
               <div>
                    상세
               </div>
          </div>
     );
}
export default boxofficeList;