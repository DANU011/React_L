import { useState, useEffect } from "react";

const BoxofficeDetail = ({ mvcd }) => {

     const [mtag, setMtag] = useState();

     const getData = async() => {
          let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&`
          url = url + `movieCd=${mvcd}`;

          try {
               const resp = await fetch(url);
               const data = await resp.json();

               //object
               let temp = data.movieInforResult.movieInfo;
               
               let keys = { 'movieNm': '영화명', 'directors': '감독' }
               
               let t;
               for (let [k, v] of Object.entries(keys)) {
                  if (k==='directors'){
                    t=t+<li>{v} {temp[k]}</li>
                  }
               }
               setMtag(t);


               temp.map((i) => console.log(i))



               // temp = Object.entries(temp).map((item)=>{
               // })

               console.log(data)
          }
          catch (err) {
               console.log(err)
          }
     }

     useEffect(() => {
          getData();
     }, [mvcd]);
     return (
          <div className="mvdtail">
            <ul>{mtag}</ul>   
          </div>
     );
}

export default BoxofficeDetail;