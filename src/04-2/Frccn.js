const Frccn = ({ dt, cn }) => {
     console.log("cn", cn);
     let infoArray = cn.split(',');
     let kn = 0;


     infoArray = infoArray.map((v) =>
     <li key={dt + kn++}>
               <span>{v.split(':')[0]}</span>(
               {v.includes('높음') ?
                    <span className='lired'>{v.split(':')[1]}</span> :
                    <span >{v.split(':')[1]}</span> //삼항연산
               })
          </li>
     );

     return (
          <div className="mainbox2">
               <div className="detail">
                    <ul className="list">
                         {infoArray}
                    </ul>
               </div>
          </div>
     );
}
export default Frccn;