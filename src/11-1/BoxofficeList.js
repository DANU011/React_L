import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({ targetDt }) => {
     const [mvlist, setMvlist] = useState();
     const [mvcd, setMvcd] = useState();


     //맨처음 랜더링
     useEffect(() => {
          //if (!targetDt) return ;
          const apikey = 'df446e423ad2aa0efdc7d349fbe56e79';
          let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`;

          fetch(url)
               .then((resp) => resp.json())
               .then((data) => {
                    console.log(data.boxOfficeResult.dailyBoxOfficeList)
                    let temp = data.boxOfficeResult.dailyBoxOfficeList;

                    setMvlist(temp.map((item) => 
                         <div className="myrow" key={item.movieCd} onClick={()=>showDetail(item.movieCd)}>
                              <span className="mycol1">{item.rank}</span>
                              <span className="mycol2">{item.movieNm}</span>
                              <span className="mycol3">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span>
                         </div>
                    ));
                    
                    
               })
               .catch((err) => console.log(err))
     }, [targetDt]);

     //영화 클릭
     const showDetail = (cd) => {
          setMvcd(cd);
     }

     return (
          <div className="mvcontent">
               <div className="mvlist">
                    <div className="mvrow0">
                         <span className="mvcol1">순위</span>
                         <span className="mvcol2">영화명</span>
                         <span className="mvcol3">관객수</span>
                    </div>
                    {mvlist}
               </div>
               <div className="mvdetail">
                    <BoxofficeDetail mvcd={mvcd} />
               </div>
          </div>
     );
}

export default BoxofficeList;