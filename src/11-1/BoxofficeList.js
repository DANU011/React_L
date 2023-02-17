import { useState, useEffect } from "react";
import BoxofficeDetail from "./BoxofficeDetail";

const BoxofficeList = ({tDt}) => {
    
    const [mvlist, setMvlist] = useState();
    const [mvcd, setCd] = useState();

    //영화클릭
    const showDetail = (cd) => {
        console.log(cd)
        setCd(cd);
    }

    //맨처음 랜더링시
    useEffect(() =>{
        console.log(tDt)
        if (!tDt) return ;
        const apikey = 'df446e423ad2aa0efdc7d349fbe56e79' ;
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`
        url = url + `key=${apikey}&`;
        url = url + `targetDt=${tDt}` ;

        console.log(url)
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            
            let temp = data.boxOfficeResult.dailyBoxOfficeList ;
            console.log("temp", temp)
             
            setMvlist(temp.map((item) =>  
                <div className="mvrow" key={item.movieCd} onClick={() => showDetail(item.movieCd)}>
                    <span className="mvcol1"><span className="mvrank">{item.rank}</span></span> 
                    <span className="mvcol2">{item.movieNm}</span> 
                    <span className="mvcol3">{parseInt(item.audiCnt).toLocaleString('kr-ko')}</span> 
                </div>
             )); 
        }) 
        .catch((err) => console.log(err))
    }, [tDt]);


    useEffect(() =>{
        console.log(mvlist)
    }, [mvlist] );



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
                 {mvcd && <BoxofficeDetail mvcd={mvcd}/>}
            </div>
        </div>
    );
}

export default BoxofficeList;