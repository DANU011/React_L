/* eslint-disable default-case */
import './Frcst.css';
import Frcheader from './Frcheader'
import Frcdt from './Frcdt'
import Frccn from './Frccn'
import { useState, useEffect } from 'react'; 


const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    

    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */

    const items = [
        {
            "frcstFourDt": "2023-02-05",
            "frcstThreeDt": "2023-02-04",
            "frcstTwoCn": "서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "gwthcnd": "2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
            "frcstTwoDt": "2023-02-03",
            "frcstFourCn": "서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "frcstThreeCn": "서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "frcstOneDt": "2023-02-02",
            "frcstOneCn": "서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
            "presnatnDt": "2023-01-30"
        }
    ]
    let frcdt = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"] ;
    let frccn = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"] ;//순서때문에 배열 사용

    //예보일자별 배열 추출
    frcdt = frcdt.map((k) => items[0][k]) ;
    frccn = frccn.map((k) => items[0][k]) ;
    //console.log("frcdt", frcdt) ;
    //console.log("frccn", frccn) ;

    //일자별 예보 오브젝트 생성-날짜와 날씨 매칭
    let frcobj = {} ;
    for (let [idx, k] of frcdt.entries()) {
        //console.log('idx=', idx, 'value=', k, 'cnvalue=', frccn[idx]) ;
        frcobj[k] = frccn[idx];
    }
    //console.log("frcobj", frcobj) ;
    let [cn, setCn] = useState(frcobj["2023-02-02"]) ;
    let [dt, setDt] = useState() ;//**1)초기값x

    useEffect(()=>{
        frcobj[dt] && setCn(frcobj[dt]) ;
    }, [dt]) ;//**2)언디파인드 //dt가 바뀌었을때 cn도 변경

    return (
        <>
            <Frcheader />
            <div className="main">
                <Frcdt dt={frcdt} setDt={setDt} />/
                {dt && <Frccn dt={dt} cn={cn} />}
            </div>
        </>
        
    ) ; //setDt={setDt}부모의 dt값을 변경할 수 있도록 probs값도 줌.
    //{dt && <Frccn dt={dt} cn={cn} />}이렇게 안하려면 cn을 처리해서 넘겨야함.
}


export default Frcst;