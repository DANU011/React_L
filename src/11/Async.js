const Async = () => {

     const url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230214'
     
     fetch(url)
     .then((resp)=> resp.json()) //풀필드 .then의 순서대로 감(프로미스체인)
     .then ((data)=>console.log(data))
     .catch((err)=> console.log(err)) //리젝트
     
     return (
          <>
          </>
     );
}

export default Async;